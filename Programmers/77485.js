'use strict';

const rotate = function (matrix, query) {
  const [x1, y1, x2, y2] = query.map((v) => v - 1);
  const rowLen = y2 - y1;
  const colLen = x2 - x1;
  let ret = [];
  let min = 0;
  for (let i = y1; i < rowLen + y1 + 1; i++) {
    const value = matrix[x1][i];
    if (ret[ret.length - 1] != value) {
      ret.push(value);
    }
  }
  for (let i = x1; i < colLen + x1 + 1; i++) {
    const value = matrix[i][y2];
    if (ret[ret.length - 1] != value) {
      ret.push(value);
    }
  }
  for (let i = y2; i > y2 - rowLen; i--) {
    const value = matrix[x2][i];
    if (ret[ret.length - 1] != value) {
      ret.push(value);
    }
  }
  for (let i = x2; i > x2 - colLen; i--) {
    const value = matrix[i][y1];
    if (ret[ret.length - 1] != value) {
      ret.push(value);
    }
  }

  ret.unshift(ret.pop());
  min = Math.min.apply(null, ret);

  for (let i = y1; i < rowLen + y1 + 1; i++) {
    matrix[x1][i] = ret.shift();
  }
  for (let i = x1 + 1; i < colLen + x1 + 1; i++) {
    matrix[i][y2] = ret.shift();
  }
  for (let i = y2 - 1; i > y2 - rowLen - 1; i--) {
    matrix[x2][i] = ret.shift();
  }
  for (let i = x2 - 1; i > x2 - colLen; i--) {
    matrix[i][y1] = ret.shift();
  }
  return [matrix, min];
};

function solution(rows, columns, queries) {
  let matrix = [];
  let startNum = 1;
  let result = [];
  for (let i = 0; i < rows; i++) {
    let item = [];
    for (let j = 0; j < columns; j++) {
      item.push(startNum++);
    }
    matrix.push(item);
  }

  queries.forEach((query) => {
    const [m, v] = rotate(matrix, query);
    result.push(v);
  });

  return result;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ]),
);
