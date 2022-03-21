import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getMouse = await getOneService(id);
    return res.send(JSON.stringify(getMouse));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getMouses = await getAllService();
    return res.send(JSON.stringify(getMouses));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const createMouse = await createService(body);
    return res.send(JSON.stringify(createMouse));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatMouse = await updateService(body, id);
    return res.send(JSON.stringify(updatMouse));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletMouse = await removeService(id);
    return res.send(JSON.stringify(deletMouse));
  } catch (err) {
    return next(err);
  }
}
