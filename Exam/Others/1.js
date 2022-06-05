'use strict';

const solution = (times, orders, durations) => {
  const callNums = [...Array(times.length)].map((_, i) => i);
  callNums.sort((a, b) => orders[a] - orders[b]);
  const callSets = new Set(callNums);
  const result = [];
  let ingCall = 0;
  let ingTime = 0;
  times.forEach((time) => {
    const findedArr = callNums.filter(
      (c) => time >= times[c] && callSets.has(c),
    );
    const finded = findedArr[0];
    if (times[finded] + durations[finded] < times[finded + 1]) {
      callSets.delete(finded);
      ingTime = times[finded] + durations[finded];
      ingCall = finded;
    } else if (finded !== ingCall) {
      if (times[finded] + durations[finded] < times[finded + 1]) {
        callSets.delete(finded);
        ingTime = times[finded] + durations[finded];
        ingCall = finded;
      } else {
        durations[ingCall] -= time - ingTime;
        if (durations[ingCall] <= 0) {
          callSets.delete(ingCall);
        }
        ingTime = time;
        ingCall = finded;
      }
    }
    if (result[result.length - 1] !== finded + 1) {
      result.push(finded + 1);
    }
  });
  const rest = [...callSets].map((v) => v + 1);
  if (result[result.length - 1] === rest[0]) {
    result.pop();
  }
  return [...result, ...rest];
};

console.log(solution([0, 5, 7], [1, 3, 2], [4, 3, 5]));
