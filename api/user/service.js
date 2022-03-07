/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import path from "path";
import {
  createFile, readFile, writeFile, isExsist,
} from "../../utils/fs.js";

const usersUrl = path.resolve("api/user/users.json");

export async function getOneService(params) {
  const { id } = params;
  const users = await readFile(usersUrl);
  const user = users[id];
  return user;
}
export async function getAllService() {
  const users = await readFile(usersUrl);
  return users;
}

export async function createService(body) {
  if (!isExsist(usersUrl)) {
    await createFile(usersUrl);
  }
  let users = await readFile(usersUrl);
  if (!users) {
    users = [];
  }
  users.push(body);
  await writeFile(usersUrl, users);
  return body;
}

export async function updateService(body, params) {
  const { id } = params;
  const users = await readFile(usersUrl);
  users[id] = body;
  await writeFile(usersUrl, users);
  return body;
}

export async function removeService(params) {
  const { id } = params;
  const users = await readFile(usersUrl);
  users.splice(id, 1);
  await writeFile(usersUrl, users);
  return users;
}
