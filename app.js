/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import userRouter from "./api/user/router.js";
import laptopRouter from "./api/laptop/router.js";
import fileRouter from "./api/file/router.js";
import orderRouter from "./api/order/router.js";
import pcRouter from "./api/pc/router.js";
import mouseRouter from "./api/mouse/router.js";
import keyboardRouter from "./api/keyboard/router.js";
import displayRouter from "./api/display/router.js";
import ramRouter from "./api/ram/router.js";
import processorRouter from "./api/processor/router.js";
import authRouter from "./api/auth/router.js";
import { authentication } from "./utils/jwt-helper.js";

mongoose.connect("mongodb+srv://root:root@redbull.vql9r.mongodb.net/redbull?retryWrites=true&w=majority");
const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use(authentication);
app.use("/user", userRouter);
app.use("/laptop", laptopRouter);
app.use("/file", fileRouter);
app.use("/order", orderRouter);
app.use("/pc", pcRouter);
app.use("/mouse", mouseRouter);
app.use("/keyboard", keyboardRouter);
app.use("/display", displayRouter);
app.use("/ram", ramRouter);
app.use("/processor", processorRouter);

app.use((err, req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.status(500).send({
    status: "server error",
    message: err.message,
    type: "internal",
  });
});

export default app;
