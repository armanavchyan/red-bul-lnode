/* eslint-disable import/named */
import express from "express";

import { body, param } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import * as validator from "./validator.js";
import * as controller from "./controller.js";
import * as errorMessages from "../../constants/errorMessages.js";
import * as fileValidator from "../file/validator.js";

const router = express.Router();

router.get("/", controller.getAll);

router.get(
  "/:id",
  param("id", errorMessages.notFound).custom(validator.isExists),
  controller.getOne,
);

router.post(
  "/",
  body("name", errorMessages.stringErrMessage(4, 255))
    .isLength({ min: 4, max: 255 }),
  body("brand", errorMessages.stringErrMessage(4, 255))
    .isLength({ min: 4, max: 255 }),
  body("totalCores", errorMessages.integerErrMessage(1, 10000))
    .isInt({ min: 1, max: 10000 }),
  body("totalThreads", errorMessages.integerErrMessage(1, 10000))
    .isInt({ min: 1, max: 10000 }),
  body("generation", errorMessages.stringErrMessage(4, 255))
    .isLength({ min: 4, max: 255 }),
  body("price", errorMessages.integerErrMessage(1, 1000000))
    .isInt({ min: 1, max: 1000000 }),
  body("img", errorMessages.notFound).custom(fileValidator.isExists),
  expressValidationResult,
  controller.create,
);

router.patch(
  "/:id",
  param("id", errorMessages.notFound).custom(validator.isExists),
  body("name", errorMessages.stringErrMessage(4, 255)).optional()
    .isLength({ min: 4, max: 255 }),
  body("brand", errorMessages.stringErrMessage(4, 255)).optional()
    .isLength({ min: 4, max: 255 }),
  body("totalCores", errorMessages.integerErrMessage(1, 10000))
    .optional().isInt({ min: 1, max: 10000 }),
  body("totalThreads", errorMessages.integerErrMessage(1, 10000))
    .optional().isInt({ min: 1, max: 10000 }),
  body("generation", errorMessages.stringErrMessage(4, 255))
    .optional().isLength({ min: 4, max: 255 }),
  body("price", errorMessages.integerErrMessage(1, 1000000))
    .optional().isInt({ min: 1, max: 1000000 }),
  body("img", errorMessages.notFound).optional()
    .custom(fileValidator.isExists),
  body("_id", errorMessages.notAccessible)
    .optional().custom(() => Promise.reject()),
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
