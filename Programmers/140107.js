'use strict';

function solution(k, d) {
  let answer = 0;
  for (let x = 0; x <= d; x += k) {
    const maxY = Math.sqrt(d ** 2 - x ** 2);
    answer += Math.ceil(maxY / k) + (maxY % k === 0 ? 1 : 0);
  }
  return answer;
}

console.log(solution(2, 4));
