/* eslint-disable import/named */
/* eslint-disable quotes */
import express from "express";
import { body, param } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import * as nameError from './errorMessages.js';
import * as validator from "./validator.js";
import * as controller from "./controller.js";
import * as errorMessages from '../../constants/errorMessages.js';

const router = express.Router();

router.get("/", controller.getAll);

router.get(
  "/:id",
  param("id", errorMessages.notFound).custom(validator.isExists),

  controller.getOne,
);

router.post(
  "/",
  body("email", errorMessages.isEmail).isEmail(),
  body("email", errorMessages.isEmail).custom(validator.isExistsEmail),

  body("fName", errorMessages.stringErrMessage(2, 255)).isLength({ min: 2, max: 255 }),
  body("fName", nameError).custom(validator.nameCostomValid).isAlpha(),

  body("lName", errorMessages.stringErrMessage(2, 255)).isLength({ min: 2, max: 255 }),
  body("lName", nameError).custom(validator.nameCostomValid).isAlpha(),

  body("age", errorMessages.integerErrMessage(1, 150)).isInt({ min: 1, max: 150 }),
  body("password", errorMessages.stringErrMessage(8, 30)).isLength({ min: 8, max: 30 }),

  expressValidationResult,

  controller.create,
);

router.patch(
  "/:id",
  param("id", errorMessages.notFound).custom(validator.isExists),

  body("username").optional().isLength({ min: 4, max: 255 }),

  body("fName", errorMessages.nameOnlyLetters).optional()
    .isLength({ min: 2, max: 255 }).custom(validator.nameCostomValid)
    .isAlpha(),

  body("lName", errorMessages.nameOnlyLetters).optional()
    .isLength({ min: 2, max: 255 }).custom(validator.nameCostomValid)
    .isAlpha(),

  body("age", errorMessages.integerErrMessage(1, 150)).optional().isInt({ min: 1, max: 150 }),
  body('_id', errorMessages.notAccessible).optional().custom(() => Promise.reject()),

  expressValidationResult,

  controller.update,
);

router.delete(
  "/:id",
  param("id", errorMessages.notFound).custom(validator.isExists),
  expressValidationResult,
  controller.remove,
);

export default router;
