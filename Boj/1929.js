'use strict';
/**
 * Boj 1929
 */
const qn = 1929;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => Number(v));

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const [from, to] = input;

console.log(
  new Array(to - from + 1)
    .fill(0)
    .map((_, i) => i + from)
    .filter((v) => isPrime(v))
    .join('\n'),
);
