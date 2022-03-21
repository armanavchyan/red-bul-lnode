/* eslint-disable no-undef */
/* eslint-disable quotes */
import mongoose from "mongoose";

const Pc = mongoose.model("Pc", {
  _id: mongoose.Schema.Types.ObjectId,
  procName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  usb: {
    type: Number,
    required: true,
  },
  mouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mouse",
    required: false,
  },
  countMouse: {
    type: Number,
  },
  keyboard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "keyboard",
    required: false,
  },
  countKeyboard: {
    type: Number,
  },
  display: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Display",
    required: false,
  },
  countDisplay: {
    type: Number,
  },
  ram: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ram",
    required: false,
  },
  countRam: {
    type: Number,
  },
});

export default Pc;
