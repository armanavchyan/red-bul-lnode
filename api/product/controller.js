/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params } = req;
    const getProduct = await getOneService(params);
    res.send(JSON.stringify(getProduct));
  } catch (err) {
    next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getedProducts = await getAllService();
    res.send(JSON.stringify(getedProducts));
  } catch (err) {
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const createdProduct = await createService(body);
    res.send(JSON.stringify(createdProduct));
  } catch (err) {
    next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params } = req;
    const updatedProduct = await updateService(body, params);
    res.send(JSON.stringify(updatedProduct));
  } catch (err) {
    next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params } = req;
    const deletedProduct = await removeService(params);
    res.send(JSON.stringify(deletedProduct));
  } catch (err) {
    next(err);
  }
}
