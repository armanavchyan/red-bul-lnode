/* eslint-disable quotes */
import mongoose from 'mongoose';
import Display from "../../models/pc.js";

export async function getOneService(id) {
  const display = await Display.findById(id)
    .select(["name", "brand", "color", "inch", "price", "image"]);
  return display;
}
export async function getAllService() {
  const displays = await Display.find()
    .select(["name", "brand", "color", "inch", "price", "image"]);
  return displays;
}

export async function createService(body) {
  const display = new Display({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await display.save();
  return display;
}

export async function updateService(body, id) {
  const displays = await Display.findByIdAndUpdate({ _id: id }, body)
    .select(["name", "brand", "color", "inch", "price", "image"]);
  return displays;
}

export async function removeService(id) {
  const displays = await Display.findByIdAndRemove({ _id: id })
    .select(["name", "brand", "color", "inch", "price", "image"]);
  return displays;
}
