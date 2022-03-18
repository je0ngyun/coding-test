'use strict';

const solution = (n, direction) => {
  const ground = [...new Array(n).fill(null).map(() => Array(n).fill(0))];
  let base = n;
  let weight = 0;
  let col = 0;
  let row = 0;

  if (!direction) {
    row = n - 1;
    while (base > 1) {
      for (let i = 1; i < base; i++) {
        ground[col][row] = i + weight;
        row--;
      }
      for (let i = 1; i < base; i++) {
        ground[col][row] = i + weight;
        col++;
      }
      for (let i = 1; i < base; i++) {
        ground[col][row] = i + weight;
        row++;
      }
      for (let i = 1; i < base; i++) {
        ground[col][row] = i + weight;
        col--;
      }
      col++;
      row--;
      base -= 2;
      weight = ground[col][row + 1];
    }
    if (base === 1) {
      ground[col][row] = ground[col][row + 1] + 1;
    }
  } else {
    while (base > 1) {
      for (let i = 1; i < base; i++) {
        ground[col][row] = i + weight;
        row++;
      }
      for (let i = 1; i < base; i++) {
        ground[col][row] = i + weight;
        col++;
      }
      for (let i = 1; i < base; i++) {
        ground[col][row] = i + weight;
        row--;
      }
      for (let i = 1; i < base; i++) {
        ground[col][row] = i + weight;
        col--;
      }
      col++;
      row++;
      base -= 2;
      weight = ground[col][row - 1];
    }
    if (base === 1) {
      ground[col][row] = ground[col][row - 1] + 1;
    }
  }

  return ground;
};

console.log(solution(6, false));
