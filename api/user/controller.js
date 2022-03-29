import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const user = await getOneService(id);
    res.send(JSON.stringify(user));
  } catch (err) {
    next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const users = await getAllService();
    res.send(JSON.stringify(users));
  } catch (err) {
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const users = await createService(body);
    res.send(JSON.stringify(users));
  } catch (err) {
    next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { params: { id }, body } = req;
    const users = await updateService(id, body);
    res.send(JSON.stringify(users));
  } catch (err) {
    next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const users = await removeService(id);
    res.send(JSON.stringify(users));
  } catch (err) {
    next(err);
  }
}
