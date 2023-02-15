'use strict';

const generate = (numRows) => {
  if (numRows === 1) return [[1]];
  const rows = [[1], [1, 1]];
  if (numRows === 2) return rows;

  for (let i = 3; i <= numRows; i++) {
    const cur = [];
    for (let j = 1; j <= i - 2; j++) {
      cur.push(rows[i - 2][j - 1] + rows[i - 2][j]);
    }
    rows.push([1, ...cur, 1]);
  }

  return rows;
};

console.log(generate(5));
