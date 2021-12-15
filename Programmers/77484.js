'use strict';

function solution(lottos, win_nums) {
  let same = lottos.filter((n) => win_nums.includes(n));
  if (same.length == 0) {
    same.length += 1;
  }
  const worst = 6 - same.length + 1;
  const best = worst - lottos.filter((n) => n === 0).length;
  return [best == 0 ? 1 : best, worst];
}

console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
