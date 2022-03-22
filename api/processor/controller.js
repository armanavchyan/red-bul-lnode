import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getProcessor = await getOneService(id);
    return res.send(JSON.stringify(getProcessor));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getProcessors = await getAllService();
    return res.send(JSON.stringify(getProcessors));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const createProcessor = await createService(body);
    return res.send(JSON.stringify(createProcessor));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatProcessor = await updateService(body, id);
    return res.send(JSON.stringify(updatProcessor));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletProcessor = await removeService(id);
    return res.send(JSON.stringify(deletProcessor));
  } catch (err) {
    return next(err);
  }
}
