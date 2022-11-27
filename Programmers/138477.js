'use strict';

const solution = (k, score) => {
  const honor = [];
  const ret = [];
  for (const v of score) {
    if (honor.length < k) {
      honor.push(v);
    } else {
      honor.sort((a, b) => a - b);
      const tgt = honor.findIndex((h) => h < v);
      if (tgt !== -1) {
        honor[tgt] = v;
      }
    }
    ret.push(Math.min(...honor));
  }
  return ret;
};

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
