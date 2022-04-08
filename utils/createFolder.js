import fs from "fs";

function createFolder() {
  const dir = "./uploads";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}
export default createFolder;
