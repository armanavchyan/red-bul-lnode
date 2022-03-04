/* eslint-disable linebreak-style */
// eslint-disable-next-line import/prefer-default-export
function validUserData(rfUsData, bodyData) {
  const fileUser = Object.values(rfUsData);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < fileUser.length; i++) {
    if (fileUser[i].username === bodyData.username) {
      throw new Error("error this user already exists");
    }
  }
  const age = Number(bodyData.age);
  if (!(Number.isInteger(age)) && !(age > 0 && age <= 150)) {
    const err = new Error("age must by number");
    return err;
  }
  // eslint-disable-next-line consistent-return
  return bodyData;
}
export default validUserData;
