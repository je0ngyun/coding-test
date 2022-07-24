'use strict';

/**
 * Boj 1018
 */
const qn = 1018;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const T1 = `BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB`;

const T2 = `WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW`;

const [rowLen, colLen] = input[0].split(' ').map((v) => Number(v));
const board = input.slice(1).map((v) => v.split(''));

let minCase = Infinity;

const cut = (sr, sc) => {
  let cutted = '';
  if (sr + 8 > rowLen) {
    return false;
  }
  if (sc + 8 > colLen) {
    return false;
  }
  for (let i = sr; i < sr + 8; i++) {
    cutted += board[i].join('').substring(sc, sc + 8);
  }
  return cutted;
};

const compare = (str, tgt) => {
  const strArr = [...str];
  const tgtArr = [...tgt];

  return strArr.filter((v, i) => v !== tgtArr[i]).length;
};

for (let i = 0; i < rowLen; i++) {
  for (let j = 0; j < colLen; j++) {
    const cutted = cut(i, j);
    if (cutted) {
      minCase = Math.min(
        minCase,
        Math.min(compare(cutted, T1), compare(cutted, T2)),
      );
    }
  }
}

console.log(minCase);
