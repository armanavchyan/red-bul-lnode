/* eslint-disable no-return-await */
/* eslint-disable quotes */
import mongoose from 'mongoose';
import User from "../../models/user.js";
import { sentMail } from "../../utils/miling.js";
import { hashPassword } from '../../utils/helper.js';

export async function getOneService(id) {
  const user = await User.findById(id)
    .select(["email", "fName", "lName", "age", 'password', 'isVerified']);
  return user;
}
export async function getOneByEmailService(email) {
  const user = await User.findOne({ email })
    .select(["email", "fName", "lName", "age", 'password', "role", 'isVerified']);
  return user;
}
export async function getOneByRoleService(role) {
  const user = await User.findOne({ role })
    .select(["email", "fName", "lName", "age", 'password', "role", 'isVerified']);
  return user;
}
export async function getAllService() {
  const users = await User.find()
    .select(["email", "fName", "lName", "age", 'password', 'isVerified', "role", 'isVerified']);
  return users;
}

export async function createService(body) {
  const { password, ...restBody } = body;
  const user = new User({
    _id: mongoose.Types.ObjectId(),
    ...restBody,
    password: await hashPassword(password),
  });
  await user.save();
  await sentMail(body.email);
  return await getOneService(user._id);
}

export async function updateService(id, body) {
  const user = await User.findByIdAndUpdate({ _id: id }, body)
    .select(["email", "fName", "lName", "age", 'password', 'isVerified']);
  return user;
}

export async function removeService(id) {
  const user = await User.findByIdAndRemove({ _id: id })
    .select(["email", "fName", "lName", "age", 'password', 'isVerified']);
  return user;
}
