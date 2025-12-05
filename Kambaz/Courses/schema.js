import mongoose from "mongoose";
import moduleSchema from "../Modules/schema.js";

const courseSchema = new mongoose.Schema({
   _id: String,
   name: String,
   number: String,
   startDate: String,
   endDate: String,
   department: String,
   credits: Number,
   author: String,
   description: String,
   image: { type: String, default: "/images/reactjs.png" },
    modules: [moduleSchema]
 },
 { collection: "courses" }
);
export default courseSchema;