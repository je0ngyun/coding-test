'use strict';

'use strict';
/**
 * Boj 1920
 */
const qn = 1920;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const a = new Set(input[1].split(' '));
const b = input[3]
  .split(' ')
  .map((v) => (a.has(v) ? 1 : 0))
  .join('\n');

console.log(b);
