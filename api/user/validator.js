import { getOneService } from "./service.js";

export function nameCostomValid(val) {
  if (val[0] < "A" || val[0] > "Z") {
    return Promise.reject();
  }
  return true;
}

export async function isExists(val) {
  const user = await getOneService(val);
  if (!user) {
    return Promise.reject();
  }

  return true;
}
