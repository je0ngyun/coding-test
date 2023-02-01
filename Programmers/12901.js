'use strict';

function solution(a, b) {
  let AllDay = 0;
  const DoW = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  for (let i = 1; i < a; i++) {
    const last = new Date(2016, i, 0);
    AllDay += last.getDate();
  }
  AllDay += b - 1;
  return DoW[AllDay % 7];
}

console.log(solution2(2, 1));
