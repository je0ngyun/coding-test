'use strict';

function findRange(num) {
  const numStr = num.toString();
  let lowChar = '0';
  const highTgt = numStr.split('').find((v) => v !== '9');

  const lowTgtIndex = numStr.split('').findIndex((v) => +v > 1);
  if (lowTgtIndex === 0) {
    lowChar = '1';
  }

  const lowTgt = numStr[lowTgtIndex];
  const high = highTgt ? numStr.replace(new RegExp(highTgt, 'g'), '9') : numStr;
  const low = lowTgt
    ? numStr.replace(new RegExp(lowTgt, 'g'), lowChar)
    : numStr;

  return +high - +low;
}

// console.log(findRange(991));
// console.log(findRange(992));
// console.log(findRange(993));
// console.log(findRange(994));
// console.log(findRange(995));
// console.log(findRange(996));
// console.log(findRange(997));
// console.log(findRange(998));
console.log(findRange(999));
