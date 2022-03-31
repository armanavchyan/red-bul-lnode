/* eslint-disable quotes */
import mongoose from "mongoose";

const User = mongoose.model("User", {
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "USER",
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default User;
