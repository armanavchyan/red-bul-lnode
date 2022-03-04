/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from "express";
import path from "path";
import {
  // eslint-disable-next-line import/named
  createFile, readFile, writeFile, isExsist,
} from "../../utils/fs.js";
// eslint-disable-next-line import/named
import { nameValidatr } from "../../utils/helper.js";
import validUserData from "../../utils/user.js";

// eslint-disable-next-line linebreak-style
const newFilePath = path.resolve("users.json");
const router = express.Router();

router.get("/", async (req, res) => {
  const obj = await readFile(newFilePath);
  console.log((JSON.parse(JSON.stringify(obj))));
  res.send(JSON.stringify(obj));
});

// eslint-disable-next-line consistent-return
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const users = await readFile(newFilePath);
  if (id < 0 || id >= users.length) {
    return res.status(404).send("error user is not founded");
  }
  res.send(users[id]);
});

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    if (!isExsist(newFilePath)) {
      await createFile(newFilePath);
    }
    let users = await readFile(newFilePath);
    if (!users) {
      users = [];
      nameValidatr(body.fName);
      nameValidatr(body.lName);
      const age = Number(body.age);
      if (!(Number.isInteger(age)) && !(age > 0 && age <= 150)) {
        console.log("age must by number");
        return;
      } users.push(body);
      await writeFile(newFilePath, users);
    }
    const retValData = await validUserData(users, body);
    users.push(retValData);
    await writeFile(newFilePath, users);
    res.send(JSON.stringify(body));
  } catch (err) {
    console.log(err);
  }
});

// eslint-disable-next-line consistent-return
router.patch("/:index", async (req, res) => {
  const { body, params } = req;
  const id = Number(params.index);
  const users = await readFile(newFilePath);
  if (id < 0 || id >= users.length) {
    return res.status(404).send("error user is not founded");
  }
  const retValData = await validUserData(users, body);
  users[id] = (retValData);
  await writeFile(newFilePath, users);
  res.send("ok");
});

// eslint-disable-next-line consistent-return
router.delete("/:index", async (req, res) => {
  const { params } = req;
  const id = Number(params.index);
  const users = await readFile(newFilePath);
  if (id < 0 || id >= users.length) {
    return res.status(404).send("error user is not founded");
  }
  users.splice(id, 1);
  await writeFile(newFilePath, users);
  res.send("user deleted");
});
export default router;
