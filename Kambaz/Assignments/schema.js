import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: { type: String, required: true },
    course: { type: String, ref: "CourseModel", required: true },
    description: String,
    points: { type: Number, default: 100 },
    availableFrom: String,
    dueDate: String,
    dueDateInput: String,
    availableFromDate: String,
    availableUntilDate: String,
    group: { type: String, default: "ASSIGNMENTS" },
    displayGradeAs: { type: String, default: "Percentage" },
    submissionType: { type: String, default: "Online" },
    websiteUrl: { type: Boolean, default: false },
    textEntry: { type: Boolean, default: false },
    fileUpload: { type: Boolean, default: false },
    studentAnnotation: { type: Boolean, default: false },
    assignTo: { type: String, default: "Everyone" }
  },
  { collection: "assignments" }
);

export default assignmentSchema;
