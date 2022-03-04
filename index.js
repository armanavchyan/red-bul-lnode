/* eslint-disable linebreak-style */
import http from "http";
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import app from "./app.js";

const port = 3000;

const server = http.createServer(app);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running in http://localhost:${port}`);
});
