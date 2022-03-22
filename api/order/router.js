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
  body("countLap", errorMessages.integerErrMessage(1, 100000)).optional(),
  body("pc", errorMessages.notFound).optional().custom(pcValidator.isExists),
  body("countPc", errorMessages.integerErrMessage(1, 100))
    .optional().isInt({ min: 1, max: 100 }),
  body("mouse", errorMessages.notFound).optional().custom(mouseValidator.isExists),
  body("countMouse", errorMessages.integerErrMessage(1, 100))
    .optional().isInt({ min: 1, max: 100 }),
  body("keyboard", errorMessages.notFound).optional().custom(keyboardValidator.isExists),
  body("countKeyboard", errorMessages.integerErrMessage(1, 100))
    .optional().isInt({ min: 1, max: 100 }),
  body("display", errorMessages.notFound).optional().custom(displayValidator.isExists),
  body("countDisplay", errorMessages.integerErrMessage(1, 100))
    .optional().isInt({ min: 1, max: 100 }),
  body("ram", errorMessages.notFound).optional().custom(ramValidator.isExists),
  body("countRam", errorMessages.integerErrMessage(1, 100))
    .optional().isInt({ min: 1, max: 100 }),
  body("processor", errorMessages.notFound).optional().custom(processorValidator.isExists),
  body("countProc", errorMessages.integerErrMessage(1, 100))
    .optional().isInt({ min: 1, max: 100 }),

  expressValidationResult,
  controller.create,
);

router.patch(
  "/:id",
  param("id", errorMessages.notAccessible).custom(validator.isExists),
  body("laptop", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("countLap", errorMessages.integerErrMessage(1, 100)).optional()
    .isInt({ min: 1, max: 100 }),
  body("pc", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("countPc", errorMessages.integerErrMessage(1, 100)).optional()
    .optional().isInt({ min: 1, max: 100 }),
  body("mouse", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("countMouse", errorMessages.integerErrMessage(1, 100)).optional()
    .optional().isInt({ min: 1, max: 100 }),
  body("keyboard", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("countKeyboard", errorMessages.integerErrMessage(1, 100)).optional()
    .optional().isInt({ min: 1, max: 100 }),
  body("ram", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("countRam", errorMessages.integerErrMessage(1, 100)).optional()
    .optional().isInt({ min: 1, max: 100 }),
  body("processor", errorMessages.notAccessible).optional()
    .custom(() => Promise.reject()),
  body("countProc", errorMessages.integerErrMessage(1, 100)).optional()
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
