'use strict';

const solution = (num) => {
  const inspectTgt = Array(num + 1).fill(true);
  for (let i = 2; i <= num; i++) {
    if (!inspectTgt[i]) continue;
    for (let j = i + i; j <= num; j += i) {
      inspectTgt[j] = false;
    }
  }
  return inspectTgt.filter((v) => v).length - 2;
};

console.log(solution(5));
