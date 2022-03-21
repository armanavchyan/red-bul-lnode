import express from "express";

import { body, param } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import * as errorMessages from "../../constants/errorMessages.js";
import * as validator from "./validator.js";
import * as controller from "./controller.js";
import * as laptopValidator from "../laptop/validator.js";
import * as pcValidator from "../pc/validator.js";

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
  body("countLap", errorMessages.integerErrMessage(1, 100000)).optional(),
  body("countPc", errorMessages.integerErrMessage(1, 100000))
    .optional().isInt({ min: 1, max: 100000 }),

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
  body("countLap", errorMessages.integerErrMessage(1, 100000)).optional(),
  body("countPc", errorMessages.integerErrMessage(1, 100000)).optional()
    .optional().isInt({ min: 1, max: 100000 }),

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
