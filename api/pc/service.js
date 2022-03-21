/* eslint-disable quotes */
import mongoose from 'mongoose';
import Pc from "../../models/pc.js";

export async function getOneService(id) {
  const pc = await Pc.findById(id)
    .select(["procName", "price", "weight", "brand", "usb"]).populate();
  return pc;
}
export async function getAllService() {
  const pcs = await Pc.find()
    .select(["procName", "price", "weight", "brand", "usb"]);
  return pcs;
}

export async function createService(body) {
  const pc = new Pc({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await pc.save();
  return pc;
}

export async function updateService(body, id) {
  const pcs = await Pc.findByIdAndUpdate({ _id: id }, body)
    .select(["procName", "price", "weight", "brand", "usb"]);
  return pcs;
}

export async function removeService(id) {
  const pcs = await Pc.findByIdAndRemove({ _id: id })
    .select(["procName", "price", "weight", "brand", "usb"]);
  return pcs;
}
