'use strict';
/**
 * Boj 1436
 */
const qn = 1436;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs').readFileSync(filePath).toString().trim();
let num = 0;
let cn = 0;

while (true) {
  if (/666/.test(num.toString())) {
    cn += 1;
    if (cn.toString() === input) break;
  }
  num++;
}

console.log(num);
