'use strict';
/**
 * Boj 2609
 */
const qn = 2609;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const [a, b] = input;

const gcd = (a, b) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  if (max % min === 0) return min;
  else return gcd(min, max % min);
};

const gcdValue = gcd(a, b);
console.log(gcdValue);
console.log((a * b) / gcdValue);
