/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
/* eslint-disable space-in-parens */
/* eslint-disable linebreak-style */

import path from "path";
import { readFile } from "./fs.js";

const prodUrl = path.resolve("api/product/product.json");

export async function prodIndexValidatr(req, res, next) {
  const product = await readFile(prodUrl);
  const { params: { id } } = req;
  if (id < 0 || id >= product.length) {
    next("error user is not founded");
  }
  next();
}
export function isNumber(req, res, next) {
  const price = Number(req.body.price);
  const weigh = Number(req.body.weigh);

  if (isNaN(price) || (!isNaN(price) && price < 0)) {
    next("error` the weigh  must  by only number");
  }

  if (isNaN(weigh) || (!isNaN(weigh) && weigh < 0)) {
    next("error` the weigh  must  by only number");
  }
  next();
}

export function prodDataValid(req, res, next) {
  const { body: { componyName } } = req
  if (componyName < "A" || componyName > "Z") {
    next("error  componyName first leter mast by have a capital leter");
  }

  for (let i = 1; i < req.body.componyName.length; i++) {
    if (!(componyName[i] >= "a" && componyName[i] <= "z")) {
      next("error` the componyName  must  have a  only leter");
    }
  }
  next();
}
