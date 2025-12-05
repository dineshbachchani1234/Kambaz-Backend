import CoursesDao from "./dao.js";
import EnrollmentsDao from "../Enrollments/dao.js";
import { findCoursesForUser, findUsersForCourse } from "../Enrollments/dao.js";

export default function CourseRoutes(app, db) {
  const dao = CoursesDao(db);
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  }
  app.get("/api/courses", findAllCourses);



  const findCoursesForEnrolledUser = async (req, res) => {
    let { userId } = req.params;
    console.log("Original userId param:", userId);
    
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      console.log("Current user from session:", currentUser);
      
      if (!currentUser) {
        console.log("No current user in session - returning 401");
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
      console.log("Using userId from session:", userId);
    }
    
    const courses = await findCoursesForUser(userId);
    console.log("Found courses:", courses);
    res.json(courses);
  };

  const enrollmentsDao = EnrollmentsDao(db);
  const createCourse = async (req, res) => {
    const currentUser = req.session["currentUser"];
    const currentDate = new Date().toISOString().split('T')[0];
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 4);
    
    // Random image selection if no image provided
    const images = [
      "/images/reactjs.png",
      "/images/htmlcss.png",
      "/images/javascript.png",
      "/images/nodejs.png"
    ];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    
    const courseData = {
      ...req.body,
      author: currentUser._id,
      startDate: currentDate,
      endDate: endDate.toISOString().split('T')[0],
      department: req.body.department || "D123",
      credits: req.body.credits || 3,
      image: req.body.image || randomImage,
      description: req.body.description || "New course description"
    };
    const newCourse = await dao.createCourse(courseData);
    await enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
    res.json(newCourse);
  };

  const deleteCourse = async (req, res) => {
    const { courseId } = req.params;
     await enrollmentsDao.unenrollAllUsersFromCourse(courseId);
    const status = await dao.deleteCourse(courseId);
    res.send(status);
  }

   const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = await dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  }

    const enrollUserInCourse = async (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await enrollmentsDao.enrollUserInCourse(uid, cid);
    res.send(status);
  };
  const unenrollUserFromCourse = async (req, res) => {
    let { uid, cid } = req.params;
    if (uid === "current") {
      const currentUser = req.session["currentUser"];
      uid = currentUser._id;
    }
    const status = await enrollmentsDao.unenrollUserFromCourse(uid, cid);
    res.send(status);
  };

  const findUsersForCourseHandler = async (req, res) => {
    const { cid } = req.params;
    const users = await findUsersForCourse(cid);
    res.json(users);
  };
  app.get("/api/courses/:cid/users", findUsersForCourseHandler);
  app.post("/api/users/:uid/courses/:cid", enrollUserInCourse);
  app.delete("/api/users/:uid/courses/:cid", unenrollUserFromCourse);
  app.put("/api/courses/:courseId", updateCourse);
  app.delete("/api/courses/:courseId", deleteCourse);
  app.post("/api/users/current/courses", createCourse);

  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);


}