import { createService, getOneByRoleService } from "../api/user/service.js";

async function addSuperAdmin() {
  const superAdmin = await getOneByRoleService("SuperAdmin");
  if (superAdmin) {
    return;
  }
  const admin = {
    email: "avchyanarman@gmail.com",
    fName: "Arman",
    lName: "Avchyan",
    age: 92,
    password: "arm632277",
    role: "SuperAdmin",
    isVerified: true,
  };
  await createService(admin);
}

export async function setDBData() {
  await addSuperAdmin();
}
