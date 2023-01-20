'use strict';

const minFlipsMonoIncr = (s) => {
  let toZeroCnt = 0;
  let toOneCnt = 0;
  for (const bit of s) {
    if (Number(bit)) {
      toZeroCnt += 1;
    } else {
      toOneCnt = Math.min(toOneCnt + 1, toZeroCnt);
    }
  }
  return Math.min(toZeroCnt, toOneCnt);
};

console.log(minFlipsMonoIncr('010110'));
