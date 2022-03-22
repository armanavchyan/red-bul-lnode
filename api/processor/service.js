/* eslint-disable quotes */
import mongoose from 'mongoose';
import Processor from "../../models/processor.js";

export async function getOneService(id) {
  const proc = await Processor.findById(id)
    .select(
      [
        "name",
        "brand",
        "totalCores",
        "totalThreads",
        "generation",
        "price",
        "image",
      ],
    );
  return proc;
}
export async function getAllService() {
  const procs = await Processor.find()
    .select(
      [
        "name",
        "brand",
        "totalCores",
        "totalThreads",
        "generation",
        "price",
        "image",
      ],
    );
  return procs;
}

export async function createService(body) {
  const proc = new Processor({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await proc.save();
  return proc;
}

export async function updateService(body, id) {
  const procs = await Processor.findByIdAndUpdate({ _id: id }, body)
    .select(
      [
        "name",
        "brand",
        "totalCores",
        "totalThreads",
        "generation",
        "price",
        "image",
      ],
    );
  return procs;
}

export async function removeService(id) {
  const procs = await Processor.findByIdAndRemove({ _id: id })
    .select(
      [
        "name",
        "brand",
        "totalCores",
        "totalThreads",
        "generation",
        "price",
        "image",
      ],
    );
  return procs;
}
