import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    _id: String,
    title: { type: String, required: true },
    course: { type: String, ref: "CourseModel", required: true },
    description: String,
    quizType: { type: String, default: "Graded Quiz" },
    points: { type: Number, default: 0 },
    assignmentGroup: { type: String, default: "Quizzes" },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    attemptsAllowed: { type: Number, default: 1 },
    showCorrectAnswers: String,
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: String,
    dueDateInput: String,
    availableDate: String,
    availableDateInput: String,
    untilDate: String,
    untilDateInput: String,
    published: { type: Boolean, default: false },
    questions: [{
      _id: String,
      title: String,
      type: { type: String, default: "Multiple Choice" },
      points: { type: Number, default: 1 },
      question: String,
      choices: [{
        text: String,
        isCorrect: { type: Boolean, default: false }
      }],
      correctAnswer: String, // For True/False
      correctAnswers: [String], // For Fill in the Blank
      order: Number
    }]
  },
  { collection: "quizzes" }
);

export default quizSchema;

