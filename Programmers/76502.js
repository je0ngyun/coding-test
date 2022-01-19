'use strict';

const rotate = function (s) {
  let ret = s.split('');
  ret.push(ret.shift());
  return ret.join('');
};

const test = function (s) {
  let prev = s;
  while (true) {
    s = s.replace(/\(\)|\[\]|\{\}/g, '');
    if (prev === s) break;
    else prev = s;
  }
  return s.length === 0 ? true : false;
};

const solution = function (s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (test(s)) answer += 1;
    s = rotate(s);
  }
  return answer;
};

console.log(solution('}]()[{'));
