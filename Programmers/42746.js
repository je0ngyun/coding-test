'use strict';

const solution = function (numbers) {
  numbers.sort((a, b) => Number(`${b}` + `${a}`) - Number(`${a}` + `${b}`));
  return numbers.every((v) => v === 0) ? 0 : numbers.join('');
};

console.log(solution([6, 10, 2]));
