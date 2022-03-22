/* eslint-disable no-undef */
/* eslint-disable quotes */
import mongoose from "mongoose";

const Ram = mongoose.model("Ram", {
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  memorySpeed: {
    type: Number,
    required: true,
  },
  memorySize: {
    type: Number,
    required: true,
  },
  generation: {
    type: String,
    required: true,
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
});

export default Ram;
