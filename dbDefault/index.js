import { createService, getOneByRoleService } from "../api/user/service.js";
import "dotenv/config";

async function addSuperAdmin() {
  const superAdmin = await getOneByRoleService("SUPERADMIN");
  if (superAdmin) {
    return;
  }
  const admin = {
    email: process.env.SUPER_EMAI,
    fName: "Arman",
    lName: "Avchyan",
    age: 37,
    password: process.env.SUPER_PASSWORD,
    role: "SUPERADMIN",
    isVerified: true,
  };
  await createService(admin);
}

export async function setDBData() {
  await addSuperAdmin();
}
