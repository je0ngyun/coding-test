'use strict';
/**
 * Boj 2164
 */
const qn = 2164;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const N = +require('fs').readFileSync(filePath).toString().trim();

const arr = Array.from({ length: N }, (_, idx) => idx + 1);
let head = 0;

for (let i = 1; i < N - 1; i++) {
  head++;
  const val = arr[head++];
  arr.push(val);
}

console.log(arr[arr.length - 1]);
