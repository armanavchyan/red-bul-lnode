import {
  getOneService, getAllService, createService, updateService, removeService,
} from "./service.js";

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getLaptop = await getOneService(id);
    return res.send(JSON.stringify(getLaptop));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getLaptops = await getAllService();
    return res.send(JSON.stringify(getLaptops));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const creatLaptop = await createService(body);
    return res.send(JSON.stringify(creatLaptop));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatLaptop = await updateService(body, id);
    return res.send(JSON.stringify(updatLaptop));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletLaptop = await removeService(id);
    return res.send(JSON.stringify(deletLaptop));
  } catch (err) {
    return next(err);
  }
}
