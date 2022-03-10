/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from "express";
import morgan from 'morgan';
import mongoose from "mongoose";
import userRouter from "./api/user/router.js";
import productRouter from "./api/product/router.js";

mongoose.connect('mongodb+srv://root:root@redbull.vql9r.mongodb.net/redbull?retryWrites=true&w=majority');
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use((err, req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(500).send({
      status: 'server error',
      message: err.message,
      type: 'internal',
    });
  });

export default app;
