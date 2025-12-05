import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema(
  {
    _id: String,
    quiz: { type: String, ref: "QuizModel", required: true },
    student: { type: String, ref: "UserModel", required: true },
    answers: [{
      questionId: String,
      answer: String,
      answers: [String], // For multiple choice or fill in blank
      isCorrect: Boolean,
    }],
    score: { type: Number, default: 0 },
    totalPoints: { type: Number, default: 0 },
    percentage: { type: Number, default: 0 },
    startedAt: { type: Date, default: Date.now },
    submittedAt: Date,
    attemptNumber: { type: Number, default: 1 },
  },
  { collection: "quizAttempts" }
);

export default quizAttemptSchema;

