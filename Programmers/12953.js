'use strict';

const gcd = (a, b) => {
  while (b != 0) {
    const c = a % b;
    a = b;
    b = c;
  }
  return a;
};

const lcm = (n1, n2) => {
  return (n1 * n2) / gcd(n1, n2);
};

const solution = (arr) => {
  return arr.reduce((acc, cur) => lcm(acc, cur));
};

console.log(solution([2, 6, 8, 14]));
