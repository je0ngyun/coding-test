'use strict';

const getLink = (board, i, j) => {
  return [board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]];
};

const solution = (board) => {
  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const [a, b, c] = getLink(board, i, j);
      if ((a && b && c) === undefined) continue;
      if (board[i][j] !== 0) {
        if (a * b * c) {
          board[i + 1][j + 1] = Math.min(board[i][j], a, b) + 1;
        }
      }
    }
  }
  return Math.max(...board.map((m) => Math.max(...m))) ** 2;
};

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ]),
);
