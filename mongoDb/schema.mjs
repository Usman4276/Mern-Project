import mongoose from "mongoose";

//Signup schema
const schema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  password: Number,
});

export default schema
