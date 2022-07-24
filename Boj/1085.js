'use strict';
/**
 * Boj 1085
 */
const qn = 1085;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const [x, y, w, h] = input;
console.log(Math.min(x, w - x, y, h - y));
