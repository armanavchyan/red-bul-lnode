/* eslint-disable linebreak-style */
/* eslint-disable space-in-parens */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/prefer-default-export
export function isNumber(val) {
  const price = Number(val.price);
  const weigh = Number(val.weigh);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(price) || (!isNaN(price) && price < 0)) {
    throw new Error("error` the weigh  must  by only number");
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(weigh) || (!isNaN(weigh) && weigh < 0)) {
    throw new Error("error` the weigh  must  by only number");
  }
}
export function prodDataValid(val) {
  // console.log(val); return;
  if (val.componyName < "A" || val.componyName > "Z") {
    throw new Error("error  componyName first leter mast by have a capital leter");
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < val.length; i++) {
    if (!(val.componyName[i] >= "a" && val.componyName[i] <= "z")) {
      throw new Error("error` the componyName  must  have a  only leter");
    }
  }
}
