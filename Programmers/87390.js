'use strict';

const solution = (n, left, right) => {
  const min = Math.floor(left / n) + 1;
  const max = Math.floor(right / n) + 1;

  let ground = [...Array(max - min + 1)].map(() => []);
  ground = ground.map((_, i) => {
    const a = Array(min + i).fill(i + min);
    const b = [...Array(n - i - min)].map((_, k) => k + 1 + a[0]);
    return [...a, ...b];
  });

  const ed = ground.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);

  const t = left - (min - 1) * ground[0].length;
  const tt = right - (min - 1) * ground[0].length + 1;

  return ed.slice(t, tt);
};

console.log(solution(3, 2, 5));
