'use strict';
/**
 * Boj 1654
 */
const qn = 1654;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [num, tgtNum] = input[0].split(' ');

const lans = input.slice(1).map((v) => +v);

let low = 1;
let high = Math.max(...lans);

const getSlicedNum = (base) => {
  return lans
    .map((v) => Math.floor(v / base))
    .reduce((acc, cur) => acc + cur, 0);
};

while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  const slicedNum = getSlicedNum(mid);
  if (slicedNum < tgtNum) {
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

console.log(high);
