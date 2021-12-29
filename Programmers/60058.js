'use strict';

const isBalance = function (str) {
  let a = str.match(/\(/g) || 0;
  let b = str.match(/\)/g) || 0;
  if (a != 0) a = a.length;
  if (b != 0) b = b.length;
  if (a === b) {
    return true;
  }
  return false;
};

const isCorrect = function (str) {
  const iter = str.length / 2;
  for (let i = 0; i < iter; i++) {
    str = str.replace('()', '');
  }
  return str.length === 0 ? true : false;
};

const spl = function (str) {
  let i;
  let u, v;
  for (i = 2; i < str.length + 1; i += 2) {
    if (isBalance(str.substr(0, i))) {
      u = str.substr(0, i);
      v = str.substring(i);
      break;
    }
  }
  return [u, v];
};

const proc = function (str) {
  return str
    .substring(1, str.length - 1)
    .split('')
    .map((v) => {
      return v === ')' ? '(' : ')';
    })
    .join('');
};

function solution(p) {
  if (p === '') {
    return '';
  }
  if (isCorrect(p)) {
    return p;
  }
  const [u, v] = spl(p);
  if (isCorrect(u)) {
    return u + solution(v);
  } else {
    return '(' + solution(v) + ')' + proc(u);
  }
}
