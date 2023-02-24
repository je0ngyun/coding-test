'use strict';
/**
 * Boj 4949
 */
const qn = 4949;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const check = (brackets) => {
  if (brackets === null) return 'yes';
  const cur = [];
  for (const bracket of brackets) {
    if (!cur.length) {
      cur.push(bracket);
      continue;
    }
    if (cur[cur.length - 1] === '[' && bracket === ']') {
      cur.pop();
      continue;
    }
    if (cur[cur.length - 1] === '(' && bracket === ')') {
      cur.pop();
      continue;
    }
    cur.push(bracket);
  }
  return cur.length ? 'no' : 'yes';
};

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((str) => check(str.match(/[\(\[\)\]]/g)));

input.pop();

console.log(input.join('\n'));
