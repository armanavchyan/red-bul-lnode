/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import mongoose from 'mongoose';
import User from "../../models/user.js";

export async function getOneService(id) {
  const user = await User.findById(id);
  return user;
}
export async function getAllService() {
  const users = await User.find();
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
  const user = await User.updateOne({ _id: id }, body);
  return user;
}

export async function removeService(id) {
  const user = await User.remove({ _id: id });
  return user;
}
