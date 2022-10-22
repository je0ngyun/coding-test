'use strict';

const solution = (topping) => {
  let answer = 0;
  const countMap = {};
  topping.forEach((v) => {
    countMap[v] ? countMap[v]++ : (countMap[v] = 1);
  });

  const a = new Set();
  const b = new Set(topping);

  topping.forEach((v) => {
    if (countMap[v] > 0) {
      countMap[v]--;
      a.add(v);
    }
    if (countMap[v] === 0) {
      b.delete(v);
      a.add(v);
    }
    if (a.size === b.size) answer++;
  });

  return answer;
};

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
