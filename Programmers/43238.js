'use strict';

const solution = (n, times) => {
  let left = 1;
  let right = Math.max(...times) * n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const done = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
    if (done < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};
