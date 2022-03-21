/* eslint-disable quotes */
import mongoose from 'mongoose';
import Order from "../../models/order.js";

export async function getOneService(id) {
  const order = await Order.findById(id).select(
    ['name',
      'price',
      'weigh',
      'brand',
      'color',
      'countLap'],
  )
    .populate(
      'laptop',
      ['name',
        'price',
        'weigh',
        'brand',
        'color'],
    ).select(
      ['namprocNamee',
        'price',
        'weigh',
        'brand',
        'usb',
        'countPc'],
    )
    .populate(
      'pc',
      ['procName',
        'price',
        'weigh',
        'brand',
        'usb'],
    );
  return order;
}
export async function getAllService() {
  const orders = await Order.find()
    .select(
      ['name',
        'price',
        'weigh',
        'brand',
        'color',
        'countLap'],
    )
    .populate(
      'laptop',
      ['name',
        'price',
        'weigh',
        'brand',
        'color'],

    ).select(
      ['namprocNamee',
        'price',
        'weigh',
        'brand',
        'usb',
        'countPc'],
    )
    .populate(
      'pc',
      ['procName',
        'price',
        'weigh',
        'brand',
        'usb'],
    );

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
    .select(
      ['name',
        'price',
        'weigh',
        'brand',
        'color',
        'countLap'],
    )
    .populate(
      'laptop',
      ['name',
        'price',
        'weigh',
        'brand',
        'color'],

    ).select(
      ['namprocNamee',
        'price',
        'weigh',
        'brand',
        'usb',
        'countPc'],
    )
    .populate(
      'pc',
      ['procName',
        'price',
        'weigh',
        'brand',
        'usb'],
    );
  return orders;
}

export async function removeService(id) {
  const orders = await Order.findByIdAndDelete({ _id: id });
  return orders;
}
