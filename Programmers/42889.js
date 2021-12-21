'use strict';

const calcRate = function (N, stages) {
  const totalNum = stages.length;
  let Rate = [];
  let cntArr = new Array(N + 2).fill(0);
  stages.forEach((v) => {
    cntArr[v] += 1;
  });
  for (let i = 1; i < N + 1; i++) {
    const challenger = totalNum - cntArr.slice(0, i).reduce((p, c) => p + c, 0);
    const successful = challenger - cntArr[i];
    Rate[i] = (challenger - successful) / challenger;
  }
  console.log(Rate);
  return Rate;
};

function solution(N, stages) {
  let answer = [];
  const rate = calcRate(N, stages);
  for (let i = 0; i < N; i++) {
    answer[answer.length] = i + 1;
  }
  answer.sort(function (a, b) {
    return rate[a] > rate[b] ? -1 : 0;
  });
  return answer;
}

console.log(solution(4, [4, 4, 4, 4, 4]));
