import QuizzesDao from "./dao.js";
import model from "./model.js";
import attemptModel from "./attempts-model.js";
import { v4 as uuidv4 } from "uuid";

export default function QuizzesRoutes(app, db) {
  const dao = QuizzesDao(db);

  const findQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await dao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  };

  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    if (quiz) {
      res.json(quiz);
    } else {
      res.status(404).json({ message: "Quiz not found" });
    }
  };

  const createQuiz = async (req, res) => {
    const { courseId } = req.params;
    const quiz = {
      ...req.body,
      course: courseId,
      questions: req.body.questions || [],
    };
    const newQuiz = await dao.createQuiz(quiz);
    res.send(newQuiz);
  };

  const deleteQuiz = async (req, res) => {
    const { quizId } = req.params;
    await dao.deleteQuiz(quizId);
    res.sendStatus(204);
  };

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    await dao.updateQuiz(quizId, quizUpdates);
    const updatedQuiz = await model.findOne({ _id: quizId });
    res.send(updatedQuiz);
  };

  const publishQuiz = async (req, res) => {
    const { quizId } = req.params;
    const { published } = req.body;
    await dao.publishQuiz(quizId, published);
    const updatedQuiz = await model.findOne({ _id: quizId });
    res.send(updatedQuiz);
  };

  const submitQuizAttempt = async (req, res) => {
    const { quizId } = req.params;
    const { studentId, answers } = req.body;
    
    const quiz = await dao.findQuizById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // Calculate score
    let score = 0;
    let totalPoints = 0;
    const gradedAnswers = quiz.questions.map((question) => {
      totalPoints += question.points || 0;
      const studentAnswer = answers.find((a) => a.questionId === question._id);
      let isCorrect = false;

      if (question.type === "Multiple Choice") {
        const correctChoice = question.choices?.find((c) => c.isCorrect);
        isCorrect = studentAnswer?.answer === correctChoice?.text;
      } else if (question.type === "True/False") {
        isCorrect = studentAnswer?.answer === question.correctAnswer;
      } else if (question.type === "Fill in the Blank") {
        const studentAnswerText = (studentAnswer?.answer || "").trim().toLowerCase();
        isCorrect = question.correctAnswers?.some((ca) =>
          ca.trim().toLowerCase() === studentAnswerText
        );
      }

      if (isCorrect) {
        score += question.points || 0;
      }

      return {
        questionId: question._id,
        answer: studentAnswer?.answer || "",
        answers: studentAnswer?.answers || [],
        isCorrect,
      };
    });

    const percentage = totalPoints > 0 ? Math.round((score / totalPoints) * 100) : 0;

    // Get attempt number
    const previousAttempts = await attemptModel.find({
      quiz: quizId,
      student: studentId,
    });
    const attemptNumber = previousAttempts.length + 1;

    const attempt = {
      _id: uuidv4(),
      quiz: quizId,
      student: studentId,
      answers: gradedAnswers,
      score,
      totalPoints,
      percentage,
      submittedAt: new Date(),
      attemptNumber,
    };

    const newAttempt = await attemptModel.create(attempt);
    res.json(newAttempt);
  };

  const getQuizAttempts = async (req, res) => {
    const { quizId } = req.params;
    const { studentId } = req.query;
    
    const query = { quiz: quizId };
    if (studentId) {
      query.student = studentId;
    }

    const attempts = await attemptModel.find(query).sort({ submittedAt: -1 });
    res.json(attempts);
  };

  const getQuizAttempt = async (req, res) => {
    const { attemptId } = req.params;
    const attempt = await attemptModel.findOne({ _id: attemptId });
    if (attempt) {
      res.json(attempt);
    } else {
      res.status(404).json({ message: "Attempt not found" });
    }
  };

  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.post("/api/courses/:courseId/quizzes", createQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.put("/api/quizzes/:quizId/publish", publishQuiz);
  app.post("/api/quizzes/:quizId/attempts", submitQuizAttempt);
  app.get("/api/quizzes/:quizId/attempts", getQuizAttempts);
  app.get("/api/quiz-attempts/:attemptId", getQuizAttempt);
}

