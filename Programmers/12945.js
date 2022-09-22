'use strict';

const solution = (n) => {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    const nextValue = (dp[i - 2] + dp[i - 1]) % 1234567;
    dp.push(nextValue);
  }
  return dp[dp.length - 1];
};

console.log(solution(5));
