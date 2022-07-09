'use strict';
// boj 1012 유기농 배추

const input = require('fs')
  .readFileSync('./Boj/input/1012.stdin')
  .toString()
  .trim()
  .split('\n');

const Tcase = input.slice(1).map((v) => v.split(' ').map((v) => Number(v)));

let answer = [];

const dir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

for (let k = 0; k < Tcase.length; k++) {
  if (Tcase[k].length === 3) {
    const [width, height, num] = Tcase[k];
    const base = num;
    const roc = Tcase.slice(k + 1, k + base + 1);

    let ret = 0;

    const graph = Array(height)
      .fill(0)
      .map((v) => new Array(width).fill(0));

    roc.forEach(([x, y]) => {
      graph[y][x] = 1;
    });

    const dfs = (x, y) => {
      if (graph[x][y] !== 1) {
        return;
      }
      graph[x][y] = 2;
      for (const [dx, dy] of dir) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < height && ny >= 0 && ny < width) {
          dfs(nx, ny);
        }
      }
    };

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (graph[i][j] === 1) {
          ret += 1;
          dfs(i, j);
        }
      }
    }

    answer.push(ret);
    k += base;
  }
}

answer.forEach((v) => console.log(v));
