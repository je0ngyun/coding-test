'use strict';

const getPossibleMax = (arr, except) => {
  const ret = [...arr];
  ret[except] = -Infinity;
  return Math.max(...ret);
};

const solution = (land) => {
  for (let i = 1; i < land.length; i++) {
    const prev = land[i - 1];
    const row = land[i];
    for (let j = 0; j < 4; j++) {
      row[j] += getPossibleMax(prev, j);
    }
  }
  return Math.max(...land[land.length - 1]);
};

console.log(
  solution([
    [1, 1, 1, 1],
    [2, 2, 2, 3],
    [3, 3, 3, 6],
    [4, 4, 4, 7],
  ]),
);
