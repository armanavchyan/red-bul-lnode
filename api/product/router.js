/* eslint-disable linebreak-style */
/* eslint-disable comma-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from "express";
// eslint-disable-next-line import/named
import { prodIndexValidatr, isNumber, prodDataValid } from "../../utils/product.js";
import {
  getOne, getAll, create, update, remove,
} from "./controller.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", prodIndexValidatr,getOne);

router.post("/", isNumber, prodDataValid, create);

router.patch("/:id", prodIndexValidatr, isNumber, prodDataValid, update);

router.delete("/:id", prodIndexValidatr, remove);
export default router;
