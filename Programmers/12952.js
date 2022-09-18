'use strict';

const except = (num, idx, n) => {
  const left = [];
  const right = [];
  const down = [];
  for (let i = idx; i > 0; i--) {
    if (!left.length) {
      left.push(num + n - 1);
    } else {
      left.push(left[left.length - 1] + n - 1);
    }
  }
  for (let i = idx; i < n - 1; i++) {
    if (!right.length) {
      right.push(num + n + 1);
    } else {
      right.push(right[right.length - 1] + n + 1);
    }
  }
  for (let i = 0; i < n; i++) {
    if (!down.length) {
      down.push(num);
    } else {
      down.push(down[down.length - 1] + n);
    }
  }
  return [...left, ...right, ...down];
};

const solution = (n) => {
  let cnt = 0;
  const board = Array.from({ length: n }, (_, row) =>
    Array.from({ length: n }, (_, idx) => idx + row * n),
  );

  const dfs = (depth, exceptSet = new Set([])) => {
    if (depth > n - 1) {
      cnt++;
      return;
    }
    for (const item of board[depth]) {
      if (!exceptSet.has(item)) {
        const e = except(item, item % n, n);
        dfs(depth + 1, new Set([...e, ...exceptSet, item]));
      }
    }
  };

  dfs(0);

  return cnt;
};

console.log(solution(4));
