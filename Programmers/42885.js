'use strict';

const solution = (people, limit) => {
  people.sort((a, b) => b - a);
  let answer = 0;
  let l = 0;
  let r = people.length - 1;
  while (l <= r) {
    if (l === r) {
      answer++;
      break;
    }
    if (people[l] + people[r] <= limit) {
      l++;
      r--;
    } else {
      l++;
    }
    answer++;
  }
  return answer;
};

console.log(solution([70, 50, 80, 50], 100));
