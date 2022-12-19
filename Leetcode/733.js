'use strict';
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const floodFill = function (image, sr, sc, color) {
  const startColor = image[sr][sc];
  if (startColor === color) return image;

  const dfs = (row, col) => {
    if (image[row][col] === startColor) {
      image[row][col] = color;
    } else {
      return;
    }
    for (const [dr, dc] of direction) {
      const nextRow = dr + row;
      const nextCol = dc + col;
      if (
        nextRow >= 0 &&
        nextRow < image.length &&
        nextCol >= 0 &&
        nextCol < image[0].length
      )
        dfs(nextRow, nextCol);
    }
  };

  dfs(sr, sc);
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2,
  ),
);
