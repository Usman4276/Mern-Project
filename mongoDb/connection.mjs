import mongoose from "mongoose";

export default async function dbConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/userAuth");
    console.log("connection to db successfull");
  } catch (error) {
    console.log("connection to db failed", error.message);
  }
}
