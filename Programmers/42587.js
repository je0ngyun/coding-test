'use strict';

const solution = function (priorities, location) {
  let result = [];
  priorities = priorities.map((p, i) => [p, i]);

  while (priorities.length > 0) {
    const item = priorities.shift();
    if (priorities.some((x) => x[0] > item[0])) {
      priorities.push(item);
    } else {
      result.push(item);
    }
  }
  return result.map((x) => x[1]).indexOf(location) + 1;
};

console.log(solution([1, 1, 9, 1, 1, 1], 0));
