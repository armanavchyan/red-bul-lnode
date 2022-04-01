/* eslint-disable import/named */
import express from "express";
import { body } from "express-validator";
import { expressValidationResult } from "../../utils/middlewares.js";
import * as controller from "./controller.js";
import * as errorMessages from "../../constants/errorMessages.js";
import * as validator from "../user/validator.js";

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

router.post(
  "/signup",
  body("email", errorMessages.isEmail).isEmail(),
  body("email", errorMessages.exists).custom(validator.isExistsEmail),
  body("fname", errorMessages.stringErrMessage(4, 255)).isLength({ min: 4, max: 255 }),
  body("fname", errorMessages.nameOnlyLetters).isAlpha(),
  body("lname", errorMessages.stringErrMessage(4, 255)).isLength({ min: 4, max: 255 }),
  body("lname", errorMessages.nameOnlyLetters).isAlpha(),
  body("age", errorMessages.integerErrMessage(0, 100)).isInt({ min: 0, max: 100 }),
  body("password", errorMessages.stringErrMessage(8, 30)).isLength({ min: 8, max: 30 }),
  expressValidationResult,
  controller.signup,
);

router.post(
  "/forget-password",
  body("email", errorMessages.isEmail).isEmail(),
  body("email", errorMessages.isNotExists).custom(validator.isExistsEmail),
  expressValidationResult,
  controller.forgetPassword,
);

router.post(
  "/recover",
  body("token", errorMessages.isJWTToken).isJWT(),
  body("password", errorMessages.stringErrMessage(0, 1000)).isLength({ max: 1000 }),
  expressValidationResult,
  controller.recover,
);

export default router;
