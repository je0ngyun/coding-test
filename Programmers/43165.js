'use strict';

let answer = 0;

const inspect = function (numbers, num, depth, target) {
  if (depth == numbers.length - 1) {
    if (num == target) {
      answer++;
    }
    return;
  }
  inspect(numbers, num + numbers[depth + 1], depth + 1, target);
  inspect(numbers, num - numbers[depth + 1], depth + 1, target);
};

function solution(numbers, target) {
  inspect(numbers, numbers[0], 0, target);
  inspect(numbers, -1 * numbers[0], 0, target);

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
