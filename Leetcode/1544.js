'use strict';
// 생각하기 동아리

const makeGood = (s) => {
  const stack = [];
  for (const char of s.split('')) {
    if (stack.length === 0) {
      // Stack이 비었을 경우 무조건 Push 진행
      stack.push(char);
      continue;
    }
    const top = stack[stack.length - 1]; // 인접문자 확인을 위해 Stack의 Top값을 가져옴
    if (Math.abs(top.charCodeAt() - char.charCodeAt()) === 32) {
      // 인접문자 비교
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
};

console.log(makeGood('aAbBcC'));
