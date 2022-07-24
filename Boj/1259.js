'use strict';
/**
 * Boj 1259
 */
const qn = 1259;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => {
    if (v === v.split('').reverse().join('')) return 'yes';
    return 'no';
  });
input.pop();
console.log(input.join('\n'));
