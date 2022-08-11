'use strict';
/**
 * Boj 1978
 */
const qn = 1978;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const len = +input[0];
const nums = input[1].split(' ').map((v) => +v);

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(nums.filter((v) => isPrime(v)).length);
