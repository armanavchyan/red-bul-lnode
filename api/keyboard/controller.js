import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getKeyboard = await getOneService(id);
    return res.send(JSON.stringify(getKeyboard));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getKeyboards = await getAllService();
    return res.send(JSON.stringify(getKeyboards));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const createKeyboard = await createService(body);
    return res.send(JSON.stringify(createKeyboard));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatKeyboard = await updateService(body, id);
    return res.send(JSON.stringify(updatKeyboard));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletKeyboard = await removeService(id);
    return res.send(JSON.stringify(deletKeyboard));
  } catch (err) {
    return next(err);
  }
}
