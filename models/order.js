import mongoose from "mongoose";

const Order = mongoose.model("Order", {
  _id: mongoose.Schema.Types.ObjectId,
  laptop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Laptop",
    required: false,
  },
  countLap: {
    type: Number,

  },
  pc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pc",
    required: false,
  },
  countPc: {
    type: Number,
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
    ref: "Keyboard",
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

export default Order;
