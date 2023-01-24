'use strict';

const solution = (k, m, score) => {
  let ans = 0;
  score.sort((a, b) => b - a);
  let tmp = [];
  for (const s of score) {
    tmp.push(s);
    if (tmp.length === m) {
      ans += Math.min(...tmp) * m;
      tmp = [];
    }
  }

  return ans;
};

console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
