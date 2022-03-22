/* eslint-disable quotes */
import mongoose from 'mongoose';
import Order from "../../models/order.js";

export async function getOneService(id) {
  const order = await Order.findById(id)
    .populate([
      {
        path: 'laptop',
        model: 'Laptop',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'pc',
        model: 'Pc',
        populate: {
          path: 'img',
        },
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

  return order;
}
export async function getAllService() {
  const orders = await Order.find()
    .populate([
      {
        path: 'laptop',
        model: 'Laptop',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'pc',
        model: 'Pc',
        populate: {
          path: 'img',
        },
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

  return orders;
}

export async function createService(body) {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await order.save();
  return order;
}

export async function updateService(body, id) {
  const orders = await Order.findByIdAndUpdate({ _id: id }, body)
    .populate([
      {
        path: 'laptop',
        model: 'Laptop',
        populate: {
          path: 'img',
        },
      },
      {
        path: 'pc',
        model: 'Pc',
        populate: {
          path: 'img',
        },
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
  return orders;
}

export async function removeService(id) {
  const orders = await Order.findByIdAndDelete({ _id: id });
  return orders;
}
