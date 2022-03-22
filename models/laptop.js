/* eslint-disable no-undef */
/* eslint-disable quotes */
import mongoose from "mongoose";

const Laptop = mongoose.model("Laptop", {
  _id: mongoose.Schema.Types.ObjectId,
  name: {
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
  color: {
    type: String,
    required: true,
  },
  img: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
    required: true,
  },
});

export default Laptop;
