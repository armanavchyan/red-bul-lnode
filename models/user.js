/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
import mongoose from "mongoose";

const User = mongoose.model("User", {
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  fName: String,
  lName: String,
  age: Number,
  password: String,
});

export default User;
