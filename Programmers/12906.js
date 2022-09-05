'use strict';

const solution = (arr) => {
  const ret = [];
  arr.forEach((value) => {
    if (ret[ret.length - 1] !== value) {
      ret.push(value);
    }
  });
  return ret;
};

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
