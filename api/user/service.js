/* eslint-disable no-return-await */
/* eslint-disable quotes */
import mongoose from 'mongoose';
import User from "../../models/user.js";
import { sentMail } from "../../utils/miling.js";
import { hashPassword } from '../../utils/helper.js';

export async function getOneService(id) {
  const user = await User.findById(id)
    .select(["email", "fName", "lName", "age"]);
  return user;
}
export async function getOneByEmailService(email) {
  const user = await User.findOne({ email });
  return user;
}
export async function getAllService() {
  const users = await User.find()
    .select(["email", "fName", "lName", "age"]);
  return users;
}

export async function createService(body) {
  const { password, ...restBody } = body;
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    ...restBody,
    password: await hashPassword(password),
  });
  const content = "Welcom to our site";
  await user.save();
  await sentMail(body.email, content);
  return await getOneService(user._id);
}

export async function updateService(body, id) {
  const user = await User.findByIdAndUpdate({ _id: id }, body)
    .select(["email", "fName", "lName", "age"]);
  return user;
}

export async function removeService(id) {
  const user = await User.findByIdAndRemove({ _id: id })
    .select(["email", "fName", "lName", "age"]);
  return user;
}
