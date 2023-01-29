'use strict';

function solution(n, arr1, arr2) {
  const ans = [];
  arr1.forEach((v, i) => {
    ans.push(
      (v | arr2[i])
        .toString(2)
        .padStart(n, '0')
        .replace(/0/g, ' ')
        .replace(/1/g, '#'),
    );
  });
  return ans;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
