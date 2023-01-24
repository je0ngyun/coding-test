'use strict';

const solution = (s) => {
  let a = [s[0]];
  let b = [];
  let idx = 1;
  let cnt = 0;

  while (idx < s.length) {
    if (a.length === b.length) {
      cnt++;
      a = [s[idx]];
      b = [];
      idx++;
      continue;
    } else {
      if (a[0] === s[idx]) a.push(s[idx]);
      else b.push(s[idx]);
    }
    idx++;
  }
  if (a.length || b.length) cnt++;
  return cnt;
};

console.log(solution('aaa'));
