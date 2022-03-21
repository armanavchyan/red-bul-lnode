import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getDisplay = await getOneService(id);
    return res.send(JSON.stringify(getDisplay));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getDisplays = await getAllService();
    return res.send(JSON.stringify(getDisplays));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const createDisplay = await createService(body);
    return res.send(JSON.stringify(createDisplay));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatDisplay = await updateService(body, id);
    return res.send(JSON.stringify(updatDisplay));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletDisplay = await removeService(id);
    return res.send(JSON.stringify(deletDisplay));
  } catch (err) {
    return next(err);
  }
}
