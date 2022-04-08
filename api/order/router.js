import express from "express";

import { body, param } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import * as errorMessages from "../../constants/errorMessages.js";
import * as validator from "./validator.js";
import * as controller from "./controller.js";
import * as laptopValidator from "../laptop/validator.js";
import * as pcValidator from "../pc/validator.js";
import * as mouseValidator from "../mouse/validator.js";
import * as keyboardValidator from "../keyboard/validator.js";
import * as displayValidator from "../display/validator.js";
import * as ramValidator from "../ram/validator.js";
import * as processorValidator from "../processor/validator.js";

const router = express.Router();

router.get("/", controller.getAll);

router.get(
  "/:id",
  param("id", errorMessages.notFound).custom(validator.isExists),
  controller.getOne,
);

router.post(
  "/",
  body("laptop", errorMessages.notFound).optional().custom(laptopValidator.isExists),
  body("pc", errorMessages.notFound).optional().custom(pcValidator.isExists),
  body("mouse", errorMessages.notFound).optional().custom(mouseValidator.isExists),
  body("keyboard", errorMessages.notFound).optional().custom(keyboardValidator.isExists),
  body("display", errorMessages.notFound).optional().custom(displayValidator.isExists),
  body("ram", errorMessages.notFound).optional().custom(ramValidator.isExists),
  body("processor", errorMessages.notFound).optional().custom(processorValidator.isExists),
  body("processor", errorMessages.notFound).optional().custom(processorValidator.isExists),
  body("count", errorMessages.integerErrMessage(1, 100)).optional().isInt({ min: 1, max: 100 }),

  expressValidationResult,
  controller.create,
);

router.patch(
  "/:id",
  param("id", errorMessages.notAccessible).custom(validator.isExists),
  body("laptop", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("pc", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("mouse", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("keyboard", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("ram", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("processor", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("count", errorMessages.integerErrMessage(1, 100)).optional()
    .optional().isInt({ min: 1, max: 100 }),

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
