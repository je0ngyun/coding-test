'use strict';

const solution = (number, k) => {
  number = number.split('').reverse();
  let delCnt = 0;
  const stack = [];

  while (number.length) {
    if (delCnt >= k) break;
    const n = number.pop();
    while (stack[stack.length - 1] < n) {
      if (delCnt >= k) break;
      stack.pop();
      delCnt++;
    }
    stack.push(n);
  }

  if (delCnt < k) {
    return stack.slice(0, delCnt - k).join('');
  }

  return stack.join('') + number.reverse().join('');
};

console.log(solution('654321', 4));
