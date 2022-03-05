/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */

import { readFile } from "./fs.js";

export async function userIndexValidatr(req, res, next) {
  const users = await readFile('users.json');
  const { params: { id } } = req;
  if (id < 0 || id >= users.length) {
    next("error user is not founded");
  }
  next();
}

export function validUserData(req, res, next) {
  const rfUsData = readFile();
  const fileUser = Object.values(rfUsData);

  for (let i = 0; i < fileUser.length; i++) {
    if (fileUser[i].username === req.body.username) {
      next("error this user already exists");
    }
  }
  const age = Number(req.body.age);
  if (isNaN(age) || !(age > 0 && age <= 150)) {
    next("age must by number");
  }
  next();
}

export function nameValidatr(req, res, next) {
  const { body: { username } } = req;
  const { body: { fName } } = req;
  const { body: { lName } } = req;

  if (username.length < 4) {
    next("length of name must by greater than 4");
  }
  if (fName[0] < "A" || fName[0] > "Z") {
    next("error  content first leter mast by have a capital leter");
  }
  if (lName[0] < "A" || lName[0] > "Z") {
    next("error  content first leter mast by have a capital leter");
  }
  for (let i = 1; i < fName.length; i++) {
    if (!(fName[i] >= "a" && fName[i] <= "z")) {
      next("error` the content  must  have a  only leter");
    }
  }
  for (let i = 1; i < lName.length; i++) {
    if (!(lName[i] >= "a" && lName[i] <= "z")) {
      next("error` the content  must  have a  only leter");
    }
  } next();
}
