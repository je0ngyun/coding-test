'use strict';

const getBase = (num) => {
  const ret = [];
  for (let i = num; i > 0; i--) {
    if (num % i === 0) ret.push(i);
  }
  return ret;
};

const solution = (brown, yellow) => {
  let y_tile = [];
  const base = getBase(yellow);
  for (let b of base) {
    for (let i = 0; i < yellow; i += b) {
      y_tile.push(Array(b).fill('y'));
    }
    const x = y_tile[0].length + 2;
    const y = y_tile.length + 2;
    if (x * y === brown + yellow) return [x, y];
    y_tile = [];
  }
};

console.log(solution(8, 1));
