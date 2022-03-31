import jwt from "jsonwebtoken";

export function sign(obj, expiresIn = "1h") {
  return jwt.sign(obj, "secret1", { expiresIn });
}
export function verify(token) {
  const decoded = jwt.verify(token, "secret1");
  return decoded;
}
export async function authentication(req, res, next) {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).send();
    }
    // eslint-disable-next-line prefer-destructuring
    token = token.split("Bearer ")[1];
    const decoded = verify(token, "secret1");

    req.user = {
      _id: decoded._id,
    };

    return next();
  } catch (err) {
    return res.status(401).send();
  }
}
