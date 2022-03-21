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
  body("name", errorMessages.stringErrMessage(4, 255))
    .isLength({ min: 4, max: 255 }),
  body("brand", errorMessages.stringErrMessage(4, 255))
    .isLength({ min: 4, max: 255 }),
  body("color", errorMessages.stringErrMessage(4, 255)).isHexColor(),
  body("memorySpeed", errorMessages.integerErrMessage(1, 1000000)).isInt({ min: 1, max: 10000 }),
  body("generation "),
  body("price", errorMessages.integerErrMessage(1, 1000000))
    .isInt({ min: 1, max: 1000000 }),

  // body("image", errorMessages.stringErrMessage(4, 255)),

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
  body("color", errorMessages.stringErrMessage(4, 255)).optional().isHexColor(),
  body("inch", errorMessages.isDeciNum).optional().isDecimal({ min: 9, max: 1000 }),
  body("price", errorMessages.integerErrMessage(1, 1000000)).optional()
    .isInt({ min: 1, max: 1000000 }),

  // body("image", errorMessages.stringErrMessage(4, 255)),

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
