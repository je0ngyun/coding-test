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
      // 현재 기록된 문자열과 다음 문자열을 합칠 수 있는경우
      dfs(arr, origin, depth + 1);
    }
    dfs(arr, selected, depth + 1); // 현재 depth를 건너뛸 경우
  };
  dfs(arr);

  return max;
};

console.log(maxLength(['1', '2', '3']));
