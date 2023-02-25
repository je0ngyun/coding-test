'use strict';
/**
 * Boj 1074
 */
const qn = 1074;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

let [N, r, c] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const sol = (N, r, c) => {
  if (N === 0) return 0;
  return (
    2 * (r % 2) + (c % 2) + 4 * sol(N - 1, Math.floor(r / 2), Math.floor(c / 2))
  );
};

console.log(sol(N, r, c));
