'use strict';

function solution(k, ranges) {
  let valueSum = 0;
  let cntSet = new Set();
  const cntMap = {};
  for (const r of ranges) {
    cntMap[r] ? cntMap[r]++ : (cntMap[r] = 1);
  }

  const arr = Object.entries(cntMap);
  arr.sort((a, b) => b[1] - a[1]);

  for (const [key, value] of arr) {
    if (valueSum >= k) break;
    valueSum += value;
    cntSet.add(key);
  }

  return cntSet.size;
}

//갯수가 높은 순서로 정렬한다

console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
