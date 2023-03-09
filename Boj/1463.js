'use strict';
/**
 * Boj 1463
 */
const qn = 1463;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs').readFileSync(filePath).toString().trim();

const dp = [0, 0];

for (let i = 2; i <= Number(input); i++) {
  dp[i] = dp[i - 1] + 1;
  if (!(i % 2)) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  if (!(i % 3)) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[dp.length - 1]);
