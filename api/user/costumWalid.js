/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import path from "path";
import { readFile } from "../../utils/fs.js";

const productsUrl = path.resolve("api/user/users.json");

export async function indexCostumValidatr(val) {
  const product = await readFile(productsUrl);
  if (val < 0 || val >= product.length) {
    return true;
  }
  return false;
}
