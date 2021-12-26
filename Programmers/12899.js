'use strict';

function solution(n) {
  let str = [];
  while (n > 3) {
    let tmp = n % 3;
    if (tmp == 0) {
      str.push(3);
      n = Math.floor(n / 3) - 1;
    } else {
      str.push(Math.floor(n % 3));
      n = Math.floor(n / 3);
    }
  }
  str.push(n);

  return str
    .map((v) => {
      if (v == 3) {
        return 4;
      }
      return v;
    })
    .reverse()
    .join('');
}

console.log(solution(10));
