'use strict';

const solution = (arr1, arr2) => {
  const answer = Array.from({ length: arr1.length }, () =>
    Array(arr2[0].length).fill(0),
  );
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      const calc = arr1[i]
        .map((v, idx) => v * arr2[idx][j])
        .reduce((a, b) => a + b);
      answer[i][j] = calc;
    }
  }
  return answer;
};

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ],
  ),
);
