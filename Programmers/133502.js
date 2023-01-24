'use strict';

const solution = (ingredient) => {
  let ans = 0;
  let tmp = [];
  const pushToTmp = (num) => {
    tmp.push(num);
    if (tmp.slice(tmp.length - 4, tmp.length).join('') === '1231') {
      ans++;
      for (let i = 0; i < 4; i++) {
        tmp.pop();
      }
    }
  };
  for (const i of ingredient) {
    pushToTmp(i);
  }
  return ans;
};

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
