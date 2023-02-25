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

let ans = 0;

// 몇 사분면인지 체크

while (N > 0) {
  N -= 1;

  const base = 2 ** N;
  const start = base * base;

  if (r < base && c < base) {
    ans += start * 0;
  } else if (r < base && c >= base) {
    ans += start * 1;
    c -= base;
  } else if (r >= base && c < base) {
    ans += start * 2;
    r -= base;
  } else {
    ans += start * 3;
    c -= base;
    r -= base;
  }
}

console.log(ans);
