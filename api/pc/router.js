/* eslint-disable import/named */
import express from "express";

import { body, param } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import * as validator from "./validator.js";
import * as controller from "./controller.js";
import * as errorMessages from "../../constants/errorMessages.js";

const router = express.Router();

router.get("/", controller.getAll);

router.get(
  "/:id",
  param("id", errorMessages.notFound).custom(validator.isExists),
  controller.getOne,
);

router.post(
  "/",
  body("procName", errorMessages.stringErrMessage(2, 255))
    .isLength({ min: 2, max: 255 }),
  body("weight", errorMessages.integerErrMessage(0, 10))
    .isInt({ min: 0, max: 10 }),
  body("price", errorMessages.integerErrMessage(0, 10000000))
    .isInt({ min: 0, max: 10000000 }),
  body("brand", errorMessages.stringErrMessage(4, 255))
    .isLength({ min: 4, max: 255 }),
  body("usb", errorMessages.integerErrMessage(1, 10))
    .isInt({ min: 1, max: 10 }),
  expressValidationResult,
  controller.create,
);

router.patch(
  "/:id",
  param("id", errorMessages.notFound).custom(validator.isExists),
  body("procName", errorMessages.stringErrMessage(4, 255)).optional()
    .isLength({ min: 4, max: 255 }),
  body("weight", errorMessages.integerErrMessage(0, 10)).optional()
    .isInt({ min: 0, max: 10 }),
  body("price", errorMessages.integerErrMessage(0, 1000000)).optional()
    .isInt({ min: 0, max: 1000000 }),
  body("brand", errorMessages.stringErrMessage(4, 255)).optional()
    .isLength({ min: 4, max: 255 }),
  body("usb", errorMessages.integerErrMessage(1, 10)).optional()
    .isInt({ min: 1, max: 10 }),
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
