'use strict';
/**
 * Boj 1158
 */
const qn = 1158;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .filter((v) => !/\d/.test(v))
  .sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if (a > b) return 1;
    return -1;
  });

console.log([...new Set(input)].join('\n'));
