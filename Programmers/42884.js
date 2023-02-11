'use strict';

function solution(routes) {
  let ans = 0;
  let cur = -30001;
  routes.sort((a, b) => a[1] - b[1]);

  for (const [start, end] of routes) {
    if (cur < start) {
      ans++;
      cur = end;
    }
  }
  return ans;
}

console.log(
  solution([
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ]),
);
