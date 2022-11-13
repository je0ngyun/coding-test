'use strict';

const gcd = (num1, num2) => {
  let a = Math.max(num1, num2);
  let b = Math.min(num1, num2);
  while (a % b !== 0) {
    const tmp = a;
    a = b;
    b = tmp % a;
  }
  return b;
};

const gcdFromArr = (arr) => {
  return arr.reduce((acc, cur) => gcd(acc, cur), arr[0]);
};

const solution = (arrayA, arrayB) => {
  let ret = 0;
  const aGcd = gcdFromArr(arrayA);
  const bGcd = gcdFromArr(arrayB);

  if (arrayA.every((v) => v % bGcd !== 0)) {
    ret = Math.max(ret, bGcd);
  }
  if (arrayB.every((v) => v % aGcd !== 0)) {
    ret = Math.max(ret, aGcd);
  }
  return ret;
};

console.log(solution([10, 17], [5, 20]));
