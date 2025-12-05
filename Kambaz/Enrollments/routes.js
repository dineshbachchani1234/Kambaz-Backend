import EnrollmentsDao from "./dao.js";

export default function EnrollmentsRoutes(app, db) {
  const enrollmentsDao = EnrollmentsDao(db);

  // Get all enrollments
  app.get("/api/enrollments", async (req, res) => {
    const enrollments = await enrollmentsDao.findAllEnrollments();
    res.json(enrollments);
  });

  // Get enrollments for a specific user
  app.get("/api/users/:userId/enrollments", (req, res) => {
    const { userId } = req.params;
    const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
    res.json(enrollments);
  });

  // Enroll user in course
  app.post("/api/users/:userId/enrollments/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const enrollment = enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  });

  // Unenroll user from course
  app.delete("/api/users/:userId/enrollments/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    const result = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: "Enrollment not found" });
    }
  });
}
