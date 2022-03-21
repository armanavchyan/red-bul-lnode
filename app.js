/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import userRouter from "./api/user/router.js";
import laptopRouter from "./api/laptop/router.js";
import orderRouter from "./api/order/router.js";
import pcRouter from "./api/pc/router.js";
import mouseRouter from "./api/mouse/router.js";
import keyboardRouter from "./api/keyboard/router.js";
import displayRouter from "./api/display/router.js";
import ramRouter from "./api/ram/router.js";

mongoose.connect("mongodb+srv://root:root@redbull.vql9r.mongodb.net/redbull?retryWrites=true&w=majority");
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/laptop", laptopRouter);
app.use("/order", orderRouter);
app.use("/pc", pcRouter);
app.use("/mouse", mouseRouter);
app.use("/keyboardRouter", keyboardRouter);
app.use("/displayRouter", displayRouter);
app.use("/ramRouter", ramRouter);

app.use((err, req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.status(500).send({
    status: "server error",
    message: err.message,
    type: "internal",
  });
});

export default app;
