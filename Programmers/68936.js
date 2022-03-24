'use strict';

let zeroCnt = 0;
let oneCnt = 0;

const divide = (arr) => {
  const ret = [...Array(4)].map(() => []);
  const base = arr.length / 2;
  for (let i = 0; i < base; i++) {
    ret[0].push([...arr[i].slice(0, base)]);
    ret[1].push([...arr[i].slice(base)]);
  }
  for (let i = base; i < arr.length; i++) {
    ret[2].push([...arr[i].slice(0, base)]);
    ret[3].push([...arr[i].slice(base)]);
  }
  return ret;
};

const check = (arr) => {
  const result = arr.reduce((a, c) => a.concat(c), []);
  const sum = result.reduce((a, c) => a + c, 0);
  if (sum === 0) return 0;
  if (sum === result.length) return 1;
  return -1;
};

const recursion = (arr) => {
  if (arr[0].length === 1) {
    if (arr[0][0] === 0) {
      zeroCnt++;
    } else {
      oneCnt++;
    }
    return;
  }
  const checkResult = check(arr);
  if (checkResult === 0) {
    zeroCnt++;
  } else if (checkResult === 1) {
    oneCnt++;
  }
  if (checkResult === -1) {
    const [a, b, c, d] = divide(arr);
    recursion(a);
    recursion(b);
    recursion(c);
    recursion(d);
  }
};

const solution = (arr) => {
  recursion(arr);
  return [zeroCnt, oneCnt];
};

console.log(
  solution([
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
  ]),
);
