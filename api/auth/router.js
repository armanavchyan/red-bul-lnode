/* eslint-disable import/named */
import express from "express";
import { body } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import * as controller from "./controller.js";
import * as errorMessages from "../../constants/errorMessages.js";

const router = express.Router();

router.post(
  "/signin",

  body("email", errorMessages.isEmail).isEmail(),
  body("password", errorMessages.stringErrMessage(0, 1000)).isLength({ max: 1000 }),
  expressValidationResult,
  controller.singin,
);

router.post(
  "/confirm",

  body("token", errorMessages.isJWTToken).isJWT(),
  expressValidationResult,
  controller.confirm,
);
router.post(
  "/remail",

  body("email", errorMessages.isEmail).isEmail(),
  expressValidationResult,
  controller.reMail,
);

export default router;
