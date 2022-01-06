'use strict';

const solution = function (s) {
  let answer = new Set();
  s = s
    .match(/{[\d,]+}/g)
    .map((ss) =>
      ss
        .slice(1, ss.length - 1)
        .split(',')
        .map((v) => Number(v)),
    )
    .sort((a, b) => a.length - b.length);
  s.forEach((v) => v.forEach((vv) => answer.add(vv)));
  return [...answer];
};

console.log(solution('{{2},{2,1,3},{2,1},{2,1,3,4}}'));
