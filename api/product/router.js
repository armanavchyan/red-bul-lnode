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
import { isNumber, prodDataValid } from "../../utils/product.js";

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

router.get("/:index", async (req, res) => {
  try {
    const { params } = req;
    const index = Number(params.index);
    const product = await readFile(usersUrl);

    if (index < 0 || index >= product.length) {
      return res.status(404).send("error user is not founded");
    }
    return res.send(product[index]);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    if (!isExsist(usersUrl)) {
      await createFile("product.json");
    }

    let product = await readFile(usersUrl);
    if (!product) {
      product = [];
    }
    isNumber(body);
    prodDataValid(body);
    product.push(body);
    await writeFile(usersUrl, product);
    return res.send(JSON.stringify(body));
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.message);
  }
});
router.patch("/:index", async (req, res) => {
  const { body, params } = req;
  const index = Number(params.index);
  const product = await readFile(usersUrl);
  if (index < 0 || index >= product.length) {
    return res.status(404).send("error user is not founded");
  }
  isNumber(body);
  await writeFile(usersUrl, product);
  res.send("ok");
});

router.delete("/:index", async (req, res) => {
  const { params } = req;
  const index = Number(params.index);
  const products = await readFile(usersUrl);
  if (index < 0 || index >= products.length) {
    return res.status(404).send("error user is not founded");
  }
  products.splice(index, 1);
  await writeFile(usersUrl, products);
  res.send("user deleted");
});

export default router;
