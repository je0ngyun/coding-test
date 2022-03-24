'use strict';

const solution = (n) => {
  return n.toString(2).match(/1/g).length;
};

console.log(solution(5));
