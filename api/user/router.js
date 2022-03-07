/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from "express";
import { userIndexValidatr, nameValidatr, validUserData } from "../../utils/user.js";
import {
  getAll, getOne, create, update, remove,
}
  from "./controller.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", userIndexValidatr, getOne);

router.post("/", nameValidatr, validUserData, create);

router.patch("/:id", userIndexValidatr, nameValidatr, validUserData, update);

router.delete("/:id", userIndexValidatr, remove);

export default router;
