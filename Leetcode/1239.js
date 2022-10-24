'use strict';

const maxLength = (arr) => {
  let max = 0;

  const dfs = (arr, selected = '', depth = 0) => {
    if (depth >= arr.length) {
      max = Math.max(max, selected.length);
      return;
    }
    const origin = selected + arr[depth];
    if (origin.length === new Set(origin).size) {
      dfs(arr, selected + arr[depth], depth + 1);
    }
    dfs(arr, selected, depth + 1);
  };
  dfs(arr);

  return max;
};

console.log(maxLength(['1', '2', '3']));
