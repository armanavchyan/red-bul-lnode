/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { getAllService } from "./service.js";

export function nameCostomValid(val) {
  if (val[0] < "A" || val[0] > "Z") {
    return Promise.reject();
  }
  return true;
}

export async function indexCostumValidatr(val) {
  const products = Object.values(await getAllService());

  for (let i = 0; i < products.length; i++) {
    if (`new ObjectId("${val}")` !== products[i]._id) {
      return Promise.reject();
    }
  }
  return true;
}
