import jwt from "jsonwebtoken";

export function sign(obj) {
  return jwt.sign(obj, "secret1", { expiresIn: "1h" });
}

export async function authentication(req, res, next) {
  try {
    let header = req.headers.authorization;
    if (!header) {
      return res.status(401).send();
    }
    // eslint-disable-next-line prefer-destructuring
    header = header.split("Bearer ")[1];
    const decoded = jwt.verify(header, "secret1");

    req.user = {
      _id: decoded._id,
    };

    return next();
  } catch (err) {
    return res.status(401).send();
  }
}
