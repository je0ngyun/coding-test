'use strict';
/**
 * Boj 1003
 */
const qn = 1003;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const [_, ...list] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => Number(v));

const cur = [
  [1, 0],
  [0, 1],
];

const getFiboCnt = (N) => {
  if (cur[N]) return `${cur[N][0]} ${cur[N][1]}`;
  for (let i = cur.length; i <= N; i++) {
    cur[i] = [cur[i - 1][1], cur[i - 1].reduce((a, b) => a + b)];
  }
  return `${cur[N][0]} ${cur[N][1]}`;
};

const ans = list.map((v) => getFiboCnt(v));
console.log(ans.join('\n'));
