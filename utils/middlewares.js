/* eslint-disable func-names */
/* eslint-disable consistent-return */
import { validationResult } from "express-validator";

export function expressValidationResult(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
}

export function checkRole(route, method) {
  return function (req, res, next) {
    const { user } = req;
    if (route === "USER" && user.role !== "SuperAdmin") {
      return res.status(409).json({ massage: "permission denied" });
    }
    if (user.role === "USER" && method !== "GET") {
      return res.status(409).json({ massage: "permission denied" });
    } if (user.role === "ADMIN" && method === "DELETE") {
      return res.status(409).json({ massage: "permission denied" });
    }
    next();
  };
}
