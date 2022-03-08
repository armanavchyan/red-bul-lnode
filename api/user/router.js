/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from "express";
import { body, param } from "express-validator";
import {
  userNameLenght, userError, contentNameError, userAgeError, userNameError,
} from "./errorMessages.js";
import {
  getAll, getOne, create, update, remove,
}
  from "./controller.js";
import { expressValidationResult } from "../../utils/middlewares.js";
import { nameCostomValid } from "../product/costumWalid.js";
import { indexCostumValidatr } from "./costumWalid.js";

const router = express.Router();

router.get("/", getAll);

router.get(
  "/:id",
  param("id", userError).isInt({ min: 0 }),
  param("id", userError).toInt().custom(async (value) => {
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
  body("username", userNameLenght).isLength({ min: 4 }),

  body("fName", userNameError).isLength({ min: 2 }).custom((value) => {
    const geted = nameCostomValid(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  })
    .isAlpha(),

  body("lName", userNameError).isLength({ min: 2 }).custom((value) => {
    const geted = nameCostomValid(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  })
    .isAlpha(),

  body("age", userAgeError).isInt({ min: 1 }),

  expressValidationResult,

  create,
);

router.patch(
  "/:id",
  param("id", userError).isInt({ min: 0 }).custom((value) => {
    const geted = indexCostumValidatr(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  }),
  body("username", userNameLenght).optional().isLength({ min: 4 }),

  body("fName", userNameError).optional().isLength({ min: 2 }).custom((value) => {
    const geted = nameCostomValid(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  })
    .isAlpha(),

  body("lName", userNameError).optional().isLength({ min: 2 }).custom((value) => {
    const geted = nameCostomValid(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  })
    .isAlpha(),

  body("age", userAgeError).optional().isInt({ min: 1, max: 150 }),

  expressValidationResult,

  update,
);

router.delete(
  "/:id",
  param("id", userError).isInt({ min: 0 }).custom((value) => {
    const geted = indexCostumValidatr(value);
    if (geted) {
      return Promise.reject();
    }
    return true;
  }),
  expressValidationResult,
  remove,
);

export default router;
