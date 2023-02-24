'use strict';
/**
 * Boj 2751
 */
const qn = 2751;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const [N, ...list] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

list.sort((a, b) => a - b);

console.log(list.join('\n'));
