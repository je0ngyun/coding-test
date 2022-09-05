'use strict';

const solution = (sizes) => {
  const fited = sizes.map((v) => v.sort((a, b) => (a < b ? 1 : -1)));
  const row = fited.map((v) => v[0]);
  const col = fited.map((v) => v[1]);
  return Math.max(...row) * Math.max(...col);
};

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ]),
);
