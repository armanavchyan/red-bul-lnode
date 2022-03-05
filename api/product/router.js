/* eslint-disable linebreak-style */
/* eslint-disable comma-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from "express";
import path from "path";
import {
  // eslint-disable-next-line import/named
  createFile, readFile, writeFile, isExsist,
} from "../../utils/fs.js";
// eslint-disable-next-line import/named
import { prodIndexValidatr, isNumber, prodDataValid } from "../../utils/product.js";

const usersUrl = path.resolve("product.json");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await readFile(usersUrl);
    res.send(products);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", prodIndexValidatr, async (req, res) => {
  const { body, params: { id } } = req;
  try {
    const products = await readFile(usersUrl);
    return res.send(products[id]);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.post("/", isNumber, prodDataValid, async (req, res) => {
  try {
    const { body } = req;
    if (!isExsist(usersUrl)) {
      await createFile(usersUrl);
    }
    let product = await readFile(usersUrl);
    if (!product) {
      product = [];
    }
    product.push(body);
    await writeFile(usersUrl, product);
    res.send(JSON.stringify(body));
  } catch (err) {
    return res.send(err);
  }
});

router.patch("/:id", prodIndexValidatr, isNumber, prodDataValid, async (req, res) => {
  const { body, params: { id } } = req;
  const product = await readFile(usersUrl);
  product[id] = body;
  await writeFile(usersUrl, product);
  res.send("ok");
});

router.delete("/:id", prodIndexValidatr, async (req, res) => {
  const { params: { id } } = req;
  const products = await readFile(usersUrl);
  products.splice(id, 1);
  await writeFile(usersUrl, products);
  res.send("user deleted");
});

export default router;
