/* eslint-disable quotes */
import { getOneService } from "./service.js";

export async function isExists(val) {
  const geted = await getOneService(val);

  if (!geted) {
    return Promise.reject();
  }

  return true;
}
