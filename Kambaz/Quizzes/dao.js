import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export default function QuizzesDao(db) {
  async function findQuizzesForCourse(courseId) {
    return await model.find({ course: courseId });
  }

  async function findQuizById(quizId) {
    return await model.findOne({ _id: quizId });
  }

  async function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: uuidv4() };
    return await model.create(newQuiz);
  }

  async function deleteQuiz(quizId) {
    return await model.deleteOne({ _id: quizId });
  }

  async function updateQuiz(quizId, quizUpdates) {
    return await model.updateOne(
      { _id: quizId },
      { $set: quizUpdates }
    );
  }

  async function publishQuiz(quizId, published) {
    return await model.updateOne(
      { _id: quizId },
      { $set: { published } }
    );
  }

  return {
    findQuizzesForCourse,
    findQuizById,
    createQuiz,
    deleteQuiz,
    updateQuiz,
    publishQuiz,
  };
}

