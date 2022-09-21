'use strict';

const record = [];

const move = (num, start, end) => {
  record.push([start, end]);
};

const hanoi = (num, start, end, sub) => {
  if (num === 1) {
    move(num, start, end);
    return;
  } else {
    hanoi(num - 1, start, sub, end);
    move(num, start, end);
    hanoi(num - 1, sub, end, start);
  }
};

const solution = (n) => {
  hanoi(n, 1, 3, 2);
  return record;
};

console.log(solution(2));
