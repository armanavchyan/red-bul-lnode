/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable import/no-unresolved */
import { sign } from "../../utils/jwt-helper.js";
import { compare } from "../../utils/helper.js";

export async function signinService(user, password) {
  if (!user) {
    return Promise.reject(401);
  }
  if (!user.isVerified) {
    return Promise.reject(401);
  }

  const isEqual = await compare(password, user.password);
  if (!isEqual) {
    return Promise.reject(401);
  }

  const token = sign({ _id: user._id });

  return token;
}
