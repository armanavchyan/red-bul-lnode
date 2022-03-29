/* eslint-disable no-return-await */
import bcrypt from "bcrypt";

export async function hashPassword(password) {
  const saltRounds = 10;
  const hashPass = await bcrypt.hash(password, saltRounds);
  return hashPass;
}

export async function compare(password, hash) {
  return await bcrypt.compare(password, hash);
}
