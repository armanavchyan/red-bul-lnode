/* eslint-disable quotes */
import mongoose from 'mongoose';
import Keyboard from "../../models/keyboard.js";

export async function getOneService(id) {
  const pc = await Keyboard.findById(id)
    .select(["name", "brand", "isWireless", "price", "color", "image"]);
  return pc;
}
export async function getAllService() {
  const pcs = await Keyboard.find()
    .select(["name", "brand", "isWireless", "price", "color", "image"]);
  return pcs;
}

export async function createService(body) {
  const pc = new Keyboard({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await pc.save();
  return pc;
}

export async function updateService(body, id) {
  const pcs = await Keyboard.findByIdAndUpdate({ _id: id }, body)
    .select(["name", "brand", "isWireless", "price", "color", "image"]);
  return pcs;
}

export async function removeService(id) {
  const pcs = await Keyboard.findByIdAndRemove({ _id: id })
    .select(["name", "brand", "isWireless", "price", "color", "image"]);
  return pcs;
}
