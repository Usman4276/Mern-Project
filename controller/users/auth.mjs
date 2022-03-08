import models from "../../models/index.js";
import model from "../../mongoDb/models.mjs";
import Joi from "joi";

const { User } = models;

//Signup function
async function signup(req, res, next) {
  console.log(req.body);

  try {
    const { firstname, lastname, username, password } = req.body;
    console.log("😀", firstname, username);
    //Sequelize to mysql
    // const data = await User.create({
    //   firstName,
    //   lastName,
    //   username,
    //   password,
    // });

    //Mongoose model

    const user_model = new model({
      firstname,
      lastname,
      username,
      password,
    });

    const data = await user_model.save();

    res.status(200).jsend.success(data);
  } catch (error) {
    return res.status(400).jsend.error(error.message);
  }
}

//Login function
async function login(req, res, next) {
  const { username, password } = req.body;
  // console.log(username, password);
  try {
    // const data = await User.findOne({
    //   where: { username, password },
    // });

    const data = await model.findOne();
    if (!data) return res.status(404).jsend.error("User not found!!!");

    return res.status(200).jsend.success(data);
  } catch (error) {
    return res.status(400).jsend.error(error.message);
  }
  // next();
}

export default { signup, login };
