/* eslint-disable import/named */
/* eslint-disable quotes */
import express from "express";
import { body, param } from "express-validator";
import { expressValidationResult, checkRole } from "../../utils/middlewares.js";
import * as nameError from './errorMessages.js';
import * as validator from "./validator.js";
import * as controller from "./controller.js";
import * as errorMessages from '../../constants/errorMessages.js';

const router = express.Router();

router.get("/", checkRole("USER", "GET"), controller.getAll);

router.get(
  "/:id",
  checkRole("USER", "GET"),
  param("id", errorMessages.notFound).custom(validator.isExists),
  controller.getOne,
);

router.patch(
  "/:id",
  checkRole("USER", "PATCH"),
  param("id", errorMessages.notFound).custom(validator.isExists),

  body("email", errorMessages.isEmail).isEmail(),
  body("email", errorMessages.isEmail).optional()
    .custom(validator.isExistsEmail),

  body("fName", errorMessages.stringErrMessage(2, 255)).optional()
    .isLength({ min: 2, max: 255 }),
  body("fName", nameError).optional().custom(validator.nameCostomValid)
    .isAlpha(),

  body("lName", errorMessages.stringErrMessage(2, 255)).optional()
    .isLength({ min: 2, max: 255 }),
  body("lName", nameError).custom(validator.nameCostomValid).isAlpha(),

  body("age", errorMessages.integerErrMessage(1, 150)).optional()
    .isInt({ min: 1, max: 150 }),
  body("password", errorMessages.stringErrMessage(8, 30)).optional()
    .isString().isLength({ min: 8, max: 30 }),
  body("role", "alallla").optional().isIn(["ADMIN", "USER"]),
  body('_id', errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),

  expressValidationResult,

  controller.update,
);

router.delete(
  "/:id",
  checkRole("USER", "DELETE"),
  param("id", errorMessages.notFound).custom(validator.isExists),
  expressValidationResult,
  controller.remove,
);

export default router;
