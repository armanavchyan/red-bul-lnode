/* eslint-disable quotes */
import mongoose from 'mongoose';
import Mouse from "../../models/pc.js";

export async function getOneService(id) {
  const mouse = await Mouse.findById(id)
    .select(["name", "brand", "isWireless", "price", "color", "image"]);
  return mouse;
}
export async function getAllService() {
  const mouses = await Mouse.find()
    .select(["name", "brand", "isWireless", "price", "color", "image"]);
  return mouses;
}

export async function createService(body) {
  const mouse = new Mouse({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await mouse.save();
  return mouse;
}

export async function updateService(body, id) {
  const mouses = await Mouse.findByIdAndUpdate({ _id: id }, body)
    .select(["name", "brand", "isWireless", "price", "color", "image"]);
  return mouses;
}

export async function removeService(id) {
  const mouses = await Mouse.findByIdAndRemove({ _id: id })
    .select(["name", "brand", "isWireless", "price", "color", "image"]);
  return mouses;
}
