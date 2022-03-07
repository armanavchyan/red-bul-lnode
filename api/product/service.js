/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import path from "path";
import {
  createFile, readFile, writeFile, isExsist,
} from "../../utils/fs.js";

const productsUrl = path.resolve("api/product/product.json");

export async function getOneService(params) {
  const { id } = params;
  const products = await readFile(productsUrl);
  const product = products[id];
  return product;
}
export async function getAllService() {
  const products = await readFile(productsUrl);
  return products;
}

export async function createService(body) {
  if (!isExsist(productsUrl)) {
    await createFile(productsUrl);
  }
  let products = await readFile(productsUrl);
  if (!products) {
    products = [];
  }
  products.push(body);
  await writeFile(productsUrl, products);
  return body;
}

export async function updateService(body, params) {
  const { id } = params;
  const products = await readFile(productsUrl);
  products[id] = body;
  await writeFile(productsUrl, products);
  return body;
}

export async function removeService(params) {
  const { id } = params;
  const products = await readFile(productsUrl);
  products.splice(id, 1);
  await writeFile(productsUrl, products);
  return products;
}
