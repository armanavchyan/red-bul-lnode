/* eslint-disable no-undef */
/* eslint-disable quotes */
import mongoose from "mongoose";

const Keyboard = mongoose.model("Keyboard", {
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  isWireless: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
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

export default Keyboard;
