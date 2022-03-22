/* eslint-disable no-undef */
/* eslint-disable quotes */
import mongoose from "mongoose";

const Pc = mongoose.model("Pc", {
  _id: mongoose.Schema.Types.ObjectId,
  procName: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  img: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
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
  processor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Processor",
    required: false,
  },
  countProc: {
    type: Number,
  },
});

export default Pc;
