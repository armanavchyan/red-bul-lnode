/* eslint-disable quotes */
import { getOneService } from "./service.js";

export async function isExists(val) {
  const geted = await getOneService(val);

  if (!geted) {
    return Promise.reject();
  }

  return true;
}

// export function isDdrNum(val){
//   val.mach([/^d.2r[3-5]/})

// }
