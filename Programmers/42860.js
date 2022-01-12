'use strict';

// a b c d e f g h i j k l m n o p q r s t u v w x y z

const getWordCnt = function (target) {
  target = target.charCodeAt();
  const a = Math.abs(target - 'A'.charCodeAt());
  const b = Math.abs(target - 'Z'.charCodeAt());
  return a > b ? b + 1 : a;
};

const go = function (start, data) {
  if (start === -1) return [];
  let i = start;
  let ret = [];
  while (true) {
    if (data.indexOf(1) === -1) break;
    if (i === data.length) i = 0;
    ret.push(data[i]);
    data[i] = 0;
    i += 1;
  }
  return ret;
};

const back = function (start, data) {
  if (start === -1) return [];
  let i = start;
  let ret = [];
  while (true) {
    if (data.indexOf(1) === -1) break;
    if (i < 0) i = data.length - 1;
    ret.push(data[i]);
    data[i] = 0;
    i -= 1;
  }
  return ret;
};

const solution = function (name) {
  const wardChangeCnt = name
    .split('')
    .map((n) => getWordCnt(n))
    .reduce((a, b) => a + b);

  const needChange = [
    0,
    ...name
      .split('')
      .map((n) => getWordCnt(n))
      .map((m) => +!!m)
      .slice(1),
  ];

  const startIdx = needChange.indexOf(1);
  let a = go(startIdx, [...needChange]).length;
  let b = back(startIdx, [...needChange]).length;

  return a > b ? b + wardChangeCnt : a + wardChangeCnt;
};
