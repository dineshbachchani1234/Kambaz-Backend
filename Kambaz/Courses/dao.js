import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function CoursesDao(db) {
  async function findAllCourses() {
    const courses = await model.find({}, { _id: 1, name: 1, description: 1, image: 1 });
    console.log("Courses from DB:", courses.map(c => ({ _id: c._id, image: c.image })));
    return courses;
  }
  
  function createCourse(course) {
    const newCourse = { ...course, _id: uuidv4() };
    return model.create(newCourse);
  }
  function deleteCourse(courseId) {
    return model.deleteOne({ _id: courseId });
  }

  function updateCourse(courseId, courseUpdates) {
    return model.updateOne({ _id: courseId }, { $set: courseUpdates });
  }

  return { findAllCourses, createCourse, deleteCourse, updateCourse };
}
