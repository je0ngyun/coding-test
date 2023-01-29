'use strict';

function solution(a, b, n) {
  let answer = 0;
  let remainder = 0;
  while (n >= a) {
    remainder = n % a;
    n = Math.floor(n / a) * b;
    answer += n;
    n += remainder;
  }
  return Math.floor(answer);
}

console.log(solution(2, 1, 20));
