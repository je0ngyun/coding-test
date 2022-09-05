'use strict';

const solution = (a, s) => {
  return a.reduce((acc, cur, idx) => {
    return acc + (s[idx] ? cur : cur * -1);
  }, 0);
};

console.log(solution([4, 7, 12], [true, false, true]));
