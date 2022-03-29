import { signinService } from "./service.js";
import { getOneByEmailService } from "../user/service.js";

export async function singin(req, res, next) {
  try {
    const { password, email } = req.body;
    const user = await getOneByEmailService(email);

    const jwt = await signinService(user, password);

    return res.send(JSON.stringify(jwt));
  } catch (err) {
    if (err === 401) {
      return res.status(401)
        .send(JSON.stringify({ message: "user credentials is wrong" }));
    }
    return next(err);
  }
}
