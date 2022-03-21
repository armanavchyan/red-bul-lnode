import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getPc = await getOneService(id);
    return res.send(JSON.stringify(getPc));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getPcs = await getAllService();
    return res.send(JSON.stringify(getPcs));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const createPc = await createService(body);
    return res.send(JSON.stringify(createPc));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatPc = await updateService(body, id);
    return res.send(JSON.stringify(updatPc));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletPc = await removeService(id);
    return res.send(JSON.stringify(deletPc));
  } catch (err) {
    return next(err);
  }
}
