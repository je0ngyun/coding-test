'use strict';
/**
 * Boj 4153
 */
const qn = 4153;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const list = require('fs').readFileSync(filePath).toString().trim().split('\n');
list.pop();

console.log(
  list
    .map((v) => {
      const [x, y, z] = v.split(' ').sort((a, b) => a - b);
      return x ** 2 + y ** 2 === z ** 2 ? 'right' : 'wrong';
    })
    .join('\n'),
);
