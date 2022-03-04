/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
export function nameValidatr(val) {
  if (val.length < 4) {
    throw new Error("length of name must by greater than 4");
  }
  if (val[0] < "A" || val[0] > "Z") {
    throw new Error("error  content first leter mast by have a capital leter");
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < val.length; i++) {
    if (!(val[i] >= "a" && val[i] <= "z")) {
      throw new Error("error` the content  must  have a  only leter");
    }
  }
}
