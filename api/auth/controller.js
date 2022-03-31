import { signinService } from "./service.js";
import { getOneByEmailService, updateService } from "../user/service.js";
import { sign, verify } from "../../utils/jwt-helper.js";
import { sentMail } from "../../utils/miling.js";

export async function reMail(req, res) {
  try {
    const { email } = req.body;
    const user = await getOneByEmailService(email);
    if (!user) {
      return res.status(404).send(JSON.stringify({ message: "email not found" }));
    }
    const jwt = sign({ _id: user._id }, "5m");
    sentMail(email, jwt);
    return res.send("token sent to your email");
  } catch (err) {
    return res.status(404).send(JSON.stringify({ message: "token is not valid" }));
  }
}
export async function confirm(req, res) {
  try {
    const { token } = req.body;
    console.log(1111);
    const decodedUser = verify(token);
    console.log(decodedUser._id);
    const updated = await updateService(decodedUser._id, { isVerified: true });
    console.log(3333);
    return res.send(updated);
  } catch (err) {
    return res.status(404).send(JSON.stringify({ message: "token is not valid" }));
  }
}

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
