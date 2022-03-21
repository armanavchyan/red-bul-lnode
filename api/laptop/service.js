/* eslint-disable quotes */
import mongoose from 'mongoose';
import Laptop from "../../models/laptop.js";

export async function getOneService(id) {
  const laptop = await Laptop.findById(id)
    .select(["name", "price", "weight", "brand", "color"]);
  return laptop;
}
export async function getAllService() {
  const laptops = await Laptop.find()
    .select(["name", "price", "weight", "brand", "color"]);
  return laptops;
}

export async function createService(body) {
  const laptop = new Laptop({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await laptop.save();
  return laptop;
}

export async function updateService(body, id) {
  const laptops = await Laptop.findByIdAndUpdate({ _id: id }, body)
    .select(["name", "price", "weight", "brand", "color"]);
  return laptops;
}

export async function removeService(id) {
  const laptops = await Laptop.findByIdAndRemove({ _id: id })
    .select(["name", "price", "weight", "brand", "color"]);
  return laptops;
}
