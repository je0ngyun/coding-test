'use strict';

function solution(data, col, row_begin, row_end) {
  let cur = null;

  data.sort((a, b) => {
    if (a[col - 1] > b[col - 1]) return 1;
    if (b[col - 1] > a[col - 1]) return -1;
    if (a[0] > b[0]) return -1;
    return 1;
  });

  for (let i = row_begin; i <= row_end; i++) {
    const modSum = data[i - 1].map((v) => v % i).reduce((a, b) => a + b);
    if (cur === null) {
      cur = modSum;
    } else {
      cur = cur ^ modSum;
    }
  }

  return cur;
}

console.log(
  solution(
    [
      [2, 2, 6],
      [1, 5, 10],
      [4, 2, 9],
      [3, 8, 3],
    ],
    2,
    2,
    3,
  ),
);
