'use strict';

function solution(X, Y) {
  const dic = {};
  const ext = [];

  for (const x of X) {
    dic[x] ? (dic[x] += 1) : (dic[x] = 1);
  }

  for (const y of Y) {
    if (!dic[y]) continue;
    if (dic[y] > 0) {
      ext.push(+y);
      dic[y] -= 1;
    }
  }

  if (!ext.length) return '-1';
  const num = +ext.sort((a, b) => b - a).join('');
  if (!num) return '0';
  return ext.sort((a, b) => b - a).join('');
}

console.log(solution('5525', '1255'));
