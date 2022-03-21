import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getOrder = await getOneService(id);
    return res.send(JSON.stringify(getOrder));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getOrders = await getAllService();
    return res.send(JSON.stringify(getOrders));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const creatOrder = await createService(body);
    return res.send(JSON.stringify(creatOrder));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatOrder = await updateService(body, id);
    return res.send(JSON.stringify(updatOrder));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletOrder = await removeService(id);
    return res.send(JSON.stringify(deletOrder));
  } catch (err) {
    return next(err);
  }
}
