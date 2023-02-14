'use strict';
const countBits = (n) => {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  const cur = [0, 1];
  for (let i = 2; i <= n; i++) {
    if (i % 2) {
      cur.push(cur[i - 1] + 1);
    } else {
      cur.push(cur[i / 2]);
    }
  }
  return cur;
};

console.log(countBits(5));
