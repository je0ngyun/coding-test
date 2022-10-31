'use strict';

const isToeplitzMatrix = (matrix) => {
  if (matrix[0].length === 1) return true;
  for (let i = 1; i < matrix.length; i++) {
    matrix[i - 1].pop();
    const prevKey = matrix[i - 1].join('');
    const currentKey = matrix[i].join('').slice(matrix[i][0].toString().length);
    if (prevKey !== currentKey) return false;
  }
  return true;
};

console.log(
  isToeplitzMatrix([
    [57, 54],
    [84, 57],
  ]),
);
