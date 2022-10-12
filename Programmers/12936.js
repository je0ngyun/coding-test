'use strict';

const factorial = (n) => {
  let ret = 1;
  for (let i = 1; i <= n; i++) {
    ret *= i;
  }
  return ret;
};

Set.prototype.toArray = function () {
  return Array.from(this);
};

const solution = (n, k) => {
  k--;
  const ret = [];
  const originSet = new Set(Array.from({ length: n }, (_, i) => i + 1));

  while (n > 0) {
    const before = factorial(n - 1);
    let idx = Math.floor(k / before);
    k = k % before;
    const tgt = originSet.toArray()[idx];
    ret.push(tgt);
    originSet.delete(tgt);
    n--;
  }

  return ret;
};

console.log(solution(4, 3));
