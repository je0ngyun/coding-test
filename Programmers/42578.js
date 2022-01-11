'use strict';

const solution = function (clothes) {
  const clothesCase = {};

  clothes.forEach((list) => {
    if (!clothesCase[list[1]]) {
      clothesCase[list[1]] = 1;
    }
    clothesCase[list[1]] += 1;
  });

  return (
    Object.entries(clothesCase)
      .map((x) => x[1])
      .reduce((a, b) => a * b, 1) - 1
  );
};

console.log(
  solution([
    ['crowmask', 'face'],
    ['bluesunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ]),
);
