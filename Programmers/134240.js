'use strict';

const solution = (food) => {
  const front = [];
  for (let i = 1; i < food.length; i++) {
    const it = Math.floor(food[i] / 2);
    for (let j = 0; j < it; j++) {
      front.push(i);
    }
  }
  return [...front, 0, ...front.reverse()].join('');
};

console.log(solution([1, 3, 4, 6]));
