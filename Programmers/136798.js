'use strict';

const getDivCnt = (num) => {
  if (num === 1) return 1;
  let cnt = 2;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      if (i === num / i) cnt++;
      else cnt += 2;
    }
  }
  return cnt;
};

const solution = (number, limit, power) => {
  let ans = 0;
  Array.from({ length: number }, (_, idx) => idx + 1).forEach((v) => {
    const cnt = getDivCnt(v);
    if (cnt > limit) ans += power;
    else ans += cnt;
  });
  return ans;
};

console.log(solution(10, 3, 2));
