'use strict';
/**
 * Boj 1107
 */
const qn = 1107;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const [target, _, str] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let ans = Math.abs(Number(target) - 100);

const regexp = str ? new RegExp(`[${str.split(' ').join('')}]`, 'g') : null;

for (let i = 0; i <= 1000000; i++) {
  const istr = i.toString();
  if (regexp === null) {
    ans = Math.min(ans, istr.length + Math.abs(i - Number(target)));
    continue;
  }
  const matched = istr.match(regexp);
  if (matched === null) {
    ans = Math.min(ans, istr.length + Math.abs(i - Number(target)));
  }
}

console.log(ans);
