/* eslint-disable quotes */
import mongoose from 'mongoose';
import Ram from "../../models/pc.js";

export async function getOneService(id) {
  const ram = await Ram.findById(id)
    .select([
      "name",
      "brand",
      "color",
      "memorySpeed",
      "memorySize",
      "generation",
      "price",
      "image",
    ]);
  return ram;
}
export async function getAllService() {
  const rams = await Ram.find()
    .select([
      "name",
      "brand",
      "color",
      "memorySpeed",
      "memorySize",
      "generation",
      "price",
      "image",
    ]);
  return rams;
}

export async function createService(body) {
  const ram = new Ram({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await ram.save();
  return ram;
}

export async function updateService(body, id) {
  const rams = await Ram.findByIdAndUpdate({ _id: id }, body)
    .select([
      "name",
      "brand",
      "color",
      "memorySpeed",
      "memorySize",
      "generation",
      "price",
      "image",
    ]);
  return rams;
}

export async function removeService(id) {
  const rams = await Ram.findByIdAndRemove({ _id: id })
    .select(
      [
        "name",
        "brand",
        "color",
        "memorySpeed",
        "memorySize",
        "generation",
        "price",
        "image",
      ],
    );
  return rams;
}
