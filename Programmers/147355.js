'use strict';

const solution = (t, p) => {
  let cnt = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    if (Number(t.substr(i, p.length)) <= Number(p)) cnt++;
  }
  return cnt;
};

console.log(solution('3141592', '271'));
