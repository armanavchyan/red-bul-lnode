/* eslint-disable linebreak-style */
/* eslint-disable no-return-await */
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
  prodError, weigh, price, componyNameError,componyNameLetterError,
} from "./errorMessages.js";
import { expressValidationResult } from "../../utils/middlewares.js";
import { nameCostomValid, indexCostumValidatr } from "./costumWalid.js";

const router = express.Router();

router.get("/", getAll);

router.get(
  "/:id",
  param("id", prodError).custom(indexCostumValidatr),
  getOne,
);

router.post(
  "/",
  body("weigh", weigh).isInt({ min: 0 }),
  body("price", price).isInt({ min: 0 }),
  body("componyName",componyNameError).custom(nameCostomValid).isAlpha(),
  body("productType",componyNameLetterError).isAlpha(),
  body("foodType",componyNameLetterError).isAlpha(),
  expressValidationResult,
  create,
);

router.patch(
  "/:id",
  param("id", prodError).custom(indexCostumValidatr),
  body("weigh", weigh).optional().isInt({ min: 0 }),
  body("price", price).optional().isInt({ min: 0 }),
  body("componyName", componyNameError).optional().custom(nameCostomValid).isAlpha(),
  expressValidationResult,
  update,
);

router.delete(
  "/:id",
  param("id", prodError).custom(indexCostumValidatr),
  expressValidationResult,
  remove,
);
export default router;
