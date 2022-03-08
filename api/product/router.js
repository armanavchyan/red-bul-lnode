/* eslint-disable linebreak-style */
/* eslint-disable import/named */
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
import { body, param } from "express-validator";
import {
  getOne, getAll, create, update, remove,
} from "./controller.js";
import {
  prodError, weigh, price, componyNameError, componyNameLetterError,
} from "./errorMessages.js";
import { expressValidationResult } from "../../utils/middlewares.js";
import { nameCostomValid, indexCostumValidatr } from "./costumWalid.js";

const router = express.Router();

router.get("/", getAll);

router.get(
  "/:id",
  param("id", prodError).isInt({ min: 0 }),
  param("id", prodError).toInt().custom(async (value) => {
    const geted = await indexCostumValidatr(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  }),
  getOne,
);

router.post(
  "/",
  body("weigh", weigh).isInt({ min: 0 }),
  body("price", price).isInt({ min: 0 }),
  body("componyName", componyNameError).custom((value) => {
    const geted = nameCostomValid(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  }),
  body("componyName", componyNameLetterError).isAlpha(),
  expressValidationResult,
  create,
);

router.patch(
  "/:id",
  param("id", prodError).isInt({ min: 0 }),
  param("id", prodError).toInt().custom(async (value) => {
    const geted = await indexCostumValidatr(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  }),
  body("weigh", weigh).isInt({ min: 0 }),
  body("price", price).isInt({ min: 0 }),
  body("componyName", componyNameError).custom((value) => {
    const geted = nameCostomValid(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  }),
  body("componyName", componyNameLetterError).isAlpha(),
  expressValidationResult,
  update,
);

router.delete(
  "/:id",
  param("id", prodError).isInt({ min: 0 }),
  param("id", prodError).toInt().custom(async (value) => {
    const geted = await indexCostumValidatr(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  }),
  expressValidationResult,
  remove,
);
export default router;
