/* eslint-disable quotes */
import mongoose from 'mongoose';
import User from "../../models/user.js";

export async function getOneService(id) {
  const user = await User.findById(id)
    .select(["username", "fName", "lName", "age"]);
  return user;
}
export async function getAllService() {
  const users = await User.find()
    .select(["username", "fName", "lName", "age"]);
  return users;
}

export async function createService(body) {
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await user.save();

  return user;
}

export async function updateService(body, id) {
  const user = await User.findByIdAndUpdate({ _id: id }, body)
    .select(["username", "fName", "lName", "age"]);
  return user;
}

export async function removeService(id) {
  const user = await User.findByIdAndRemove({ _id: id })
    .select(["username", "fName", "lName", "age"]);
  return user;
}
