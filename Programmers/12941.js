'use strict';

const solution = (a, b) => {
  a.sort((a, b) => (a > b ? 1 : -1));
  b.sort((a, b) => (a > b ? -1 : 1));
  return a.reduce((acc, cur, idx) => {
    return acc + cur * b[idx];
  }, 0);
};

console.log(solution([1, 4, 2], [5, 4, 4]));
