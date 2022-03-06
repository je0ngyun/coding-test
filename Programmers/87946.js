'use strict';

const permu = function (arr, num) {
  const ret = [];
  if (num === 1) return arr.map((value) => [value]);
  arr.forEach((f, i, o) => {
    const rest = [...o.slice(0, i), ...o.slice(i + 1)];
    const proc = permu(rest, num - 1);
    ret.push(...proc.map((p) => [f, ...p]));
  });
  return ret;
};

const solution = (k, dungeons) => {
  const p = permu(dungeons, dungeons.length);
  const result = p
    .map((pp) => {
      let K = k;
      return pp.filter((ppp) => {
        if (K >= ppp[0]) {
          K = K - ppp[1];
          return true;
        }
        return false;
      });
    })
    .map((pppp) => pppp.length);
  return Math.max(...result);
};

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ]),
);
