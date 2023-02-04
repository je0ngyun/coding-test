'use strict';

function solution(elements) {
  const cntMap = {};
  for (let i = 1; i <= elements.length; i++) {
    cntMap[i] = new Set();
  }
  elements = [...elements, ...elements.slice(0, elements.length - 1)];

  for (let i = 0; i < elements.length - 1; i++) {
    for (let j = i + 1; j < elements.length; j++) {
      const ele = elements.slice(i, j);
      if (cntMap[ele.length])
        cntMap[ele.length].add(ele.reduce((a, b) => a + b));
    }
  }
  let ansSet = new Set();

  Object.entries(cntMap).forEach(([_, value]) => {
    [...value].forEach((v) => ansSet.add(v));
  });

  return ansSet.size;
}

console.log(solution([7, 9, 1, 1, 4]));
