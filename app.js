/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import express from "express";
import userRouter from "./api/user/router.js";
import productRouter from "./api/product/router.js";

const app = express();

app.use(express.json());
app.use((err, req, res, next) => {
    res.setHeader("Contetn_type", "aplication/json");
    res.status(500).send({
        status: 500,
        message: err.message,
        type: 'internal',
    });
    res.send(JSON.stringify(err));
    next();
});

app.use("/user", userRouter);
app.use("/product", productRouter);

export default app;
