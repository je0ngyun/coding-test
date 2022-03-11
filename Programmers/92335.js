'use strict';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const solution = (n, k) => {
  return n
    .toString(k)
    .split('0')
    .map((m) => Number(m))
    .filter((f) => isPrime(f)).length;
};

console.log(solution(2350707, 10));
