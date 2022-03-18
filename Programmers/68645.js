'use strict';

const rotate = (ground, n, max) => {
  let value = 1;
  let col = 0;
  let row = 0;
  while (true) {
    while (col < n) {
      if (value > max) return;
      if (ground[col][row] !== 0) break;
      ground[col][row] = value;
      value++;
      col++;
    }
    col--;
    row++;
    while (row < n) {
      if (value > max) return;
      if (ground[col][row] !== 0) break;
      ground[col][row] = value;
      value++;
      row++;
    }
    col--;
    row -= 2;
    while (ground[col][row] === 0) {
      if (value > max) return;
      ground[col][row] = value;
      value++;
      row--;
      col--;
    }
    col += 2;
    row++;
  }
};

const solution = (n) => {
  if (n === 1) return [1];
  if (n === 2) return [1, 2, 3];
  const ground = [...Array(n)].map((_, i) => Array(i + 1).fill(0));
  const max = (n * (n + 1)) / 2;
  const ret = [];
  rotate(ground, n, max);
  ground.forEach((g) => {
    ret.push(...g);
  });
  return ret;
};

console.log(solution(2));
