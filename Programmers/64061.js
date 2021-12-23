'use strict';

function solution(board, moves) {
  let newBoard = [];
  let result = [];
  let cnt = 0;
  for (let i = 0; i < board[0].length; i++) {
    newBoard.push(
      board
        .map((v) => v[i])
        .reverse()
        .filter((v) => v),
    );
  }
  moves.forEach((v) => {
    const value = newBoard[v - 1].pop();
    if (value) {
      if (result[result.length - 1] != value) {
        result.push(value);
      } else {
        result.pop();
        cnt += 2;
      }
    }
  });
  return cnt;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ),
);
