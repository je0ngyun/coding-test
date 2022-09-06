'use strict';

let result = 0;

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const combi = (arr, select, depth = 0, ret = []) => {
  if (ret.length === select) {
    console.log(ret);
    //if (isPrime(ret.reduce((a, b) => a + b))) result += 1;
    return;
  }
  if (depth > arr.length - 1) {
    return;
  }
  combi(arr, select, depth + 1, [...ret]);
  ret.push(arr[depth]);
  combi(arr, select, depth + 1, [...ret]);
};

const solution = (nums) => {
  combi(nums, 3);
  return result;
};

//console.log(solution([1, 2, 7, 6, 4]));
