const mongoose = require("mongoose");
const Joi = require("joi");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minlength: [8, "name must be 2 or more characters"],
    maxlength: 255,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    minlength: [5, "email must be 8 or more characters"],
    maxlength: 255,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [8, "Password must be 8 or more characters"],
    maxlength: 255,
  },

  isAdmin: Boolean,
});

const User = mongoose.model("User", userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().required().max(2).max(255),
    email: Joi.string().email().required().max(255).min(5),
    password: Joi.string().required().max(255).min(8),
  });

  return schema.validate(user);
};

module.exports = { User, validateUser };
