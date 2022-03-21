import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getRam = await getOneService(id);
    return res.send(JSON.stringify(getRam));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getRams = await getAllService();
    return res.send(JSON.stringify(getRams));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const createRam = await createService(body);
    return res.send(JSON.stringify(createRam));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatRam = await updateService(body, id);
    return res.send(JSON.stringify(updatRam));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletRam = await removeService(id);
    return res.send(JSON.stringify(deletRam));
  } catch (err) {
    return next(err);
  }
}
