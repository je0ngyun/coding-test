'use strict';

function solution(number) {
  let cnt = 0;
  const dfs = (arr, depth = 0, selected = []) => {
    if (depth > arr.length) {
      return;
    }
    if (selected.length > 2) {
      if (selected.reduce((a, b) => a + b) === 0) cnt++;
      return;
    }
    dfs(arr, depth + 1, [...selected]);
    dfs(arr, depth + 1, [...selected, arr[depth]]);
  };

  dfs(number);
  return cnt;
}

console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
