'use strict';
/**
 * Boj 2798
 */
const qn = 2798;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const M = input[0].split(' ')[1];
const cards = input[1].split(' ').map((v) => Number(v));
let max = -Infinity;

for (let i = 0; i < cards.length; i++) {
  for (let j = i + 1; j < cards.length; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= M) max = Math.max(max, sum);
    }
  }
}

console.log(max);
