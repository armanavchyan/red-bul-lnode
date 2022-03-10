/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
import { getAllService } from "./service.js";

export async function indexCostumValidatr(val) {
  const users = Object.values(await getAllService());

  for (let i = 0; i < users.length;) {
    if (`new ObjectId("${val}")` !== users[i]._id) {
      return Promise.reject();
    }
  }
  return true;
}
