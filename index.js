/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
import http from "http";
import app from "./app.js";
const port = 3000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`);
});
