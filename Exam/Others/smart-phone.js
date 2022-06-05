'use strict';

const solution = (times, orders, durations) => {
  const result = [];
  const callNums = [...Array(times.length)].map((_, i) => i);
  callNums.sort((a, b) => orders[a] - orders[b]);
  const callSets = new Set(callNums);

  let ingCall = 0;
  let ingTime = 0;

  for (const time of times) {
    //해당시간에 우선순위가 가장 높은 전화 찾기
    const finded = callNums.find((c) => time >= times[c] && callSets.has(c));

    //뺏기지 않고 전화를 종료할 수 있는 경우
    if (times[finded] + durations[finded] < times[finded + 1]) {
      callSets.delete(finded);
      ingTime = times[finded] + durations[finded];
      ingCall = finded;
    }

    //우선순위가 높은 전화가 나타났을 경우
    if (finded !== ingCall) {
      durations[ingCall] -= time - ingTime;
      if (durations[ingCall] <= 0) {
        callSets.delete(ingCall);
      }
      ingTime = time;
      ingCall = finded;
    }

    if (result[result.length - 1] !== finded + 1) {
      result.push(finded + 1);
    }
  }

  // 전화가 다 들어오고 난 뒤에는 우선순위대로만 처리하면 되므로 Set 이어붙히기
  const rest = [...callSets].map((v) => v + 1);
  if (result[result.length - 1] === rest[0]) {
    result.pop();
  }
  return [...result, ...rest];
};

console.log(
  solution([0, 3, 5, 7, 7, 11], [2, 3, 4, 2, 1, 1], [10, 3, 5, 2, 3, 2]),
);
