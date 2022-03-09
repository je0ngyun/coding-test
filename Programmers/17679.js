'use strict';

const move = [
  [0, 1],
  [1, 0],
  [1, 1],
];

const del = (m, n, board) => {
  const delArr = [];
  for (let i = 0; i < m - 1; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (board[i][j] === '-') continue;
      const stand = board[i][j];
      const targets = move.map((m) => [i + m[0], j + m[1]]);
      if (targets.map((t) => board[t[0]][t[1]]).every((e) => e === stand)) {
        delArr.push([i, j], ...targets);
      }
    }
  }
  if (delArr.length > 0) {
    delArr.forEach((d) => {
      board[d[0]][d[1]] = '-';
    });
    return true;
  }
  return false;
};

const down = (m, n, board) => {
  const re = [...Array(n)].map(() => []);
  board.forEach((b) =>
    b.forEach((bb, i) => {
      re[i].push(bb);
    }),
  );
  re.map((r) => [
    ...r.filter((rr) => rr === '-'),
    ...r.filter((rr) => rr !== '-'),
  ]).forEach((d, y) =>
    d.forEach((dd, x) => {
      board[x][y] = dd;
    }),
  );
};

const solution = (m, n, board) => {
  let cnt = 0;
  board = board.map((b) => b.split(''));
  while (true) {
    if (!del(m, n, board)) break;
    down(m, n, board);
  }
  board.forEach((b) =>
    b.forEach((bb) => {
      if (bb === '-') cnt++;
    }),
  );
  return cnt;
};

console.log(
  solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']),
);
