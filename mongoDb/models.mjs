import mongoose from "mongoose";
import signupSchema from "./schema.mjs";

const model = mongoose.model("Signup", signupSchema);

export default model;

