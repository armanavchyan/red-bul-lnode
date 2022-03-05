/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
import fs from "fs";

export function createFile(incPath) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    fs.open(incPath, "w", (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

export function readFile(incPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(incPath, (err, data) => {
      if (err) return reject(err);
      if (data.toString()) { return resolve(JSON.parse(data)); }
      return resolve();
    });
  });
}

export function writeFile(incPath, users) {
  return new Promise((resolve, reject) => {
    fs.writeFile(incPath, JSON.stringify(users), (err) => {
      if (err) { return reject(err); }
      return resolve();
    });
  });
}

export function isExsist(url) {
  return fs.existsSync(url);
}
