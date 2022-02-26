'use strict';

const solution = (s) => {
  if (s.length % 2 != 0) return 0;
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const b = s.charAt(i);
    if (stack[stack.length - 1] === b) {
      stack.pop();
    } else {
      stack.push(b);
    }
  }

  return stack.length > 0 ? 0 : 1;
};

console.log(solution('bccccaabacabcb'));
