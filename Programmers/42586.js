'use strict';

function solution(progresses, speeds) {
  let result = [];
  let day = progresses.map((pro, i) => {
    return Math.ceil((100 - pro) / speeds[i]);
  });
  while (day.length != 0) {
    const flag = new Array(day.length).fill(false);
    let criteria;
    day.forEach((v, i) => {
      if (i == 0) {
        criteria = v;
        flag[i] = true;
      } else if (flag[i - 1] && v <= criteria) {
        flag[i] = true;
      }
    });
    day = day.filter((_, i) => !flag[i]);
    result.push(flag.filter((f) => f).length);
  }
  return result;
}

// 자기도 7보다 작고 자기 전도 7보다 작아야함

// 100-93 / 퍼센티지 의 올림 [7,3,9]

console.log(solution([93, 30, 55], [1, 30, 5]));
