/* eslint-disable import/named */
import express from "express";

import { body, param } from "express-validator";
import { checkRole, expressValidationResult } from "../../utils/middlewares.js";
import * as validator from "./validator.js";
import * as controller from "./controller.js";
import * as errorMessages from "../../constants/errorMessages.js";
import * as fileValidator from "../file/validator.js";

const router = express.Router();

router.get("/", checkRole("USER", "GET"), controller.getAll);

router.get(
  "/:id",
  checkRole("USER", "GET"),
  param("id", errorMessages.notFound).custom(validator.isExists),
  controller.getOne,
);

router.post(
  "/",
  checkRole("USER", "POST"),
  body("name", errorMessages.stringErrMessage(2, 255))
    .isLength({ min: 4, max: 255 }),
  body("brand", errorMessages.stringErrMessage(2, 255))
    .isLength({ min: 2, max: 255 }),
  body("isWireless", errorMessages.isBool).isBoolean(),
  body("price", errorMessages.integerErrMessage(1, 1000000))
    .isInt({ min: 1, max: 1000000 }),
  body("color", errorMessages.stringErrMessage(4, 255)).isHexColor(),
  body("img", errorMessages.notFound).custom(fileValidator.isExists),
  expressValidationResult,
  controller.create,
);

router.patch(
  "/:id",
  checkRole("USER", "PATCH"),
  param("id", errorMessages.notFound).custom(validator.isExists),
  body("name", errorMessages.stringErrMessage(4, 255)).optional()
    .isLength({ min: 4, max: 255 }),
  body("brand", errorMessages.stringErrMessage(4, 255)).optional()
    .isLength({ min: 4, max: 255 }),
  body("isWireless", errorMessages.isBool).isBoolean(),
  body("price", errorMessages.integerErrMessage(0, 1000000)).optional()
    .isInt({ min: 0, max: 1000000 }),
  body("color", errorMessages.stringErrMessage(4, 255)).isHexColor(),
  body("img", errorMessages.notFound).optional()
    .custom(fileValidator.isExists),

  body("_id", errorMessages.notAccessible)
    .optional().custom(() => Promise.reject()),
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
