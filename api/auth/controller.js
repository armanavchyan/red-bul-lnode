import { signinService } from "./service.js";
import { createService, getOneByEmailService, updateService } from "../user/service.js";
import { sign, verify } from "../../utils/jwt-helper.js";
import { createJWTContent, sentMail } from "../../utils/miling.js";

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
    const decodedUser = verify(token);
    const updated = await updateService(decodedUser._id, { isVerified: true });
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
export async function signup(req, res, next) {
  try {
    const { body } = req;
    const created = await createService(body);
    const jwt = sign({ _id: created._id }, "15m");
    const html = createJWTContent(jwt);
    await sentMail(body.email, html);
    return res.send(JSON.stringify(created));
  } catch (err) {
    return next(err);
  }
}
export async function forgetPassword(req, res, next) {
  try {
    const { email } = req.body;
    const user = await getOneByEmailService(email);
    const jwt = sign({ _id: user._id }, "15m");
    const html = createJWTContent(jwt);
    await sentMail(email, html);
    return res.send(JSON.stringify(user));
  } catch (err) {
    return next(err);
  }
}
export async function recover(req, res, next) {
  try {
    console.log(11111);
    const { token, password } = req.body;
    const decodedUser = verify(token);

    const updated = await updateService(decodedUser._id, { password });
    return res.send(JSON.stringify(updated));
  } catch (err) {
    return next(err);
  }
}
