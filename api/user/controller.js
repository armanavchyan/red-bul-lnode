/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params } = req;
    const get = await getOneService(params);
    res.send(JSON.stringify(get));
  } catch (err) {
    next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const geted = await getAllService();
    res.send(JSON.stringify(geted));
  } catch (err) {
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const created = await createService(body);
    res.send(JSON.stringify(created));
  } catch (err) {
    next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params } = req;
    const updated = await updateService(body, params);
    res.send(JSON.stringify(updated));
  } catch (err) {
    next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params } = req;
    const deleted = await removeService(params);
    res.send(JSON.stringify(deleted));
  } catch (err) {
    next(err);
  }
}
