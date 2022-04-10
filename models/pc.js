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
  keyboard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "keyboard",
    required: false,
  },
  display: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Display",
    required: false,
  },
  ram: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ram",
    required: false,
  },
  processor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Processor",
    required: false,
  },
  count: {
    type: Number,
  },
});

export default Pc;
