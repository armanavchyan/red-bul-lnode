/* eslint-disable no-undef */
/* eslint-disable quotes */
import mongoose from "mongoose";

const Display = mongoose.model("Display", {
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
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
  inch: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  image: {
    type: mongoose.ObjectId,
    required: true,
  },
});

export default Display;
