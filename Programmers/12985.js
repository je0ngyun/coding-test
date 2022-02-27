'use strict';

const solution = (n, a, b) => {
  let x = (a - 1) ^ (b - 1);
  let cnt = 0;
  while (true) {
    if (x) {
      cnt++;
      x >>= 1;
    } else {
      return cnt;
    }
  }
};

console.log(solution(8, 4, 7));
