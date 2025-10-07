const { number } = require("joi");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    typeof: string,
    required: true,
  },
  lastName: {
    typeof: string,
    required: true,
  },
  email: {
    typeof: string,
    required: true,
    unique: true,
  },
  mobileNo: {
    typeof: number,
    required: true,
  },
  password: {
    typeof: string,
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
