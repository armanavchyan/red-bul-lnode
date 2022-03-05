/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from "express";
import path from "path";
import {
  createFile, readFile, writeFile, isExsist,
} from "../../utils/fs.js";
import { } from "../../utils/helper.js";
import { userIndexValidatr, nameValidatr, validUserData } from "../../utils/user.js";

const newFilePath = path.resolve("users.json");
const router = express.Router();

router.get("/", async (req, res) => {
  const obj = await readFile(newFilePath);
  res.send(JSON.stringify(obj));
});

router.get("/:id", userIndexValidatr, async (req, res) => {
  const { params: { id } } = req;
  const users = await readFile(newFilePath);
  res.send(users[id]);
});

router.post("/", nameValidatr, validUserData, async (req, res) => {
  try {
    const { body } = req;
    if (!isExsist(newFilePath)) {
      await createFile(newFilePath);
    }
    let users = await readFile(newFilePath);
    if (!users) {
      users = [];
    }
    users.push(body);
    await writeFile(newFilePath, users);
    res.send(JSON.stringify(body));
  } catch (err) {
    res.send(err);
  }
});

router.patch("/:id", userIndexValidatr, nameValidatr, validUserData, async (req, res) => {
  const { body, params: { id } } = req;
  const users = await readFile(newFilePath);
  users[id] = body;
  await writeFile(newFilePath, users);
  res.send("ok");
});

router.delete("/:id", userIndexValidatr, async (req, res) => {
  const { params: { id } } = req;
  const users = await readFile(newFilePath);
  users.splice(id, 1);
  await writeFile(newFilePath, users);
  res.send("user deleted");
});
export default router;
