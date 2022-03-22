/* eslint-disable no-undef */
/* eslint-disable quotes */
import mongoose from "mongoose";

const Processor = mongoose.model("Processor", {
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  totalCores: {
    type: Number,
    required: true,
  },
  totalThreads: {
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

export default Processor;
