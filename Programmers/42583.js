'use strict';

const inspect = (ing, com) => {
  return ing.filter((i) => (i[1] === com ? false : true));
};

const current = (ing) => {
  return ing.map((m) => m[0]).reduce((a, b) => a + b, 0);
};

const solution = (bridge_length, weight, truck_weights) => {
  truck_weights.reverse();
  let ing = [[1, 1]];

  for (let i = 1; true; i++) {
    if (!ing.length) return i - 1;
    const truck = truck_weights.pop();
    ing = inspect(ing, i);
    if (current(ing) + truck <= weight) {
      ing.push([truck, i + bridge_length]);
    } else {
      truck_weights.push(truck);
    }
  }
};

console.log(solution(100, 100, [10]));
