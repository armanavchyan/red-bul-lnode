import { getOneService } from "./service.js";

export async function isExists(val) {
  const product = await getOneService(val);

  if (!product) {
    return Promise.reject();
  }

  return true;
}
