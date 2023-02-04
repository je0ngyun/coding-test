'use strict';

function solution(want, number, discount) {
  let ans = 0;
  let i = 0;
  const curDic = {};
  for (let i = 0; i < 10; i++) {
    curDic[discount[i]] ? curDic[discount[i]]++ : (curDic[discount[i]] = 1);
    if (number.every((num, idx) => curDic[want[idx]] === num)) ans++;
  }
  for (let i = 10; i < discount.length; i++) {
    curDic[discount[i]] ? curDic[discount[i]]++ : (curDic[discount[i]] = 1);
    if (curDic[discount[i - 10]]) curDic[discount[i - 10]]--;
    if (number.every((num, idx) => curDic[want[idx]] === num)) ans++;
  }
  return ans;
}

// want ["banana", "apple", "rice", "pork", "pot"]
// dis ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]

// 수량을 동적으로 계산 해주어야 함
// 10개씩 끊으면서 현제목록을 동적으로 변경

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ],
  ),
);
