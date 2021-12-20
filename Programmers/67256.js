'use strict';

const pos = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  '*': [3, 0],
  0: [3, 1],
  '#': [3, 2],
};

function solution(numbers, hand) {
  let cl = '*';
  let cr = '#';
  const leftArea = [1, 4, 7];
  const rightArea = [3, 6, 9];
  const middleArea = [2, 5, 8, 0];
  numbers = numbers.map((v) => {
    if (leftArea.includes(v)) {
      cl = v;
      return 'L';
    } else if (rightArea.includes(v)) {
      cr = v;
      return 'R';
    } else {
      let a = pos[v].map((vv, i) => {
        return Math.abs(vv - pos[cl][i]);
      });
      let b = pos[v].map((vv, i) => {
        return Math.abs(vv - pos[cr][i]);
      });
      if (a.reduce((a, b) => a + b, 0) > b.reduce((a, b) => a + b, 0)) {
        cr = v;
        return 'R';
      } else if (a.reduce((a, b) => a + b, 0) < b.reduce((a, b) => a + b, 0)) {
        cl = v;
        return 'L';
      } else {
        if (hand == 'left') {
          cl = v;
          return 'L';
        } else {
          cr = v;
          return 'R';
        }
      }
    }
  });
  return numbers;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
