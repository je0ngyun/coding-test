'use strict';

const solution = (storey) => {
  let answer = Infinity;
  const digits = storey
    .toString()
    .split('')
    .map((v) => +v)
    .reverse();

  const dfs = (depth = 0, cnt = 0, carry = 0) => {
    if (depth >= digits.length) {
      answer = Math.min(answer, cnt + carry);
      return;
    }
    dfs(depth + 1, cnt + digits[depth] + carry);
    dfs(depth + 1, cnt + 10 - (digits[depth] + carry), 1);
  };
  dfs();
  return answer;
};
