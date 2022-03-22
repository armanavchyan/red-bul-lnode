/* eslint-disable quotes */
import mongoose from 'mongoose';
import Pc from "../../models/pc.js";

export async function getOneService(id) {
  const pc = await Pc.findById(id)
    .populate([
      {
        path: 'img',
        select: ['fileName'],
      },
      {
        path: 'mouse',
        model: 'Mouse',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'keyboard',
        model: 'Keyboard',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'display',
        model: 'Display',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'ram',
        model: 'Ram',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'processor',
        model: 'Processor',
        populate: {
          path: 'img',
        },
      },

    ]);
  return pc;
}
export async function getAllService() {
  const pcs = await Pc.find()
    .populate([
      {
        path: 'img',
        select: ['fileName'],
      },
      {
        path: 'mouse',
        model: 'Mouse',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'keyboard',
        model: 'Keyboard',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'display',
        model: 'Display',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'ram',
        model: 'Ram',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'processor',
        model: 'Processor',
        populate: {
          path: 'img',
        },
      },

    ]);
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
    .populate([
      {
        path: 'img',
        select: ['fileName'],
      },
      {
        path: 'mouse',
        model: 'Mouse',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'keyboard',
        model: 'Keyboard',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'display',
        model: 'Display',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'ram',
        model: 'Ram',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'processor',
        model: 'Processor',
        populate: {
          path: 'img',
        },
      },

    ]);
  return pcs;
}

export async function removeService(id) {
  const pcs = await Pc.findByIdAndRemove({ _id: id })
    .populate([
      {
        path: 'img',
        select: ['fileName'],
      },
      {
        path: 'mouse',
        model: 'Mouse',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'keyboard',
        model: 'Keyboard',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'display',
        model: 'Display',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'ram',
        model: 'Ram',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'processor',
        model: 'Processor',
        populate: {
          path: 'img',
        },
      },

    ]);
  return pcs;
}
