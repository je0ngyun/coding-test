'use strict';

/**
 * Boj 2884 알림시계
 */
const qn = 2884;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((v) => v.padStart(2, '0'));

const [hour, minute] = input;

const date = new Date(`2022-07-23T${hour}:${minute}:00.000Z`);

const tgtDate = new Date(date.getTime() - 60 * 45 * 1000).toISOString();

console.log(Number(tgtDate.slice(11, 13)), Number(tgtDate.slice(14, 16)));
