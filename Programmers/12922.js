'use strict';

const solution = (len) => {
  const str = '수박'.repeat(len % 2 === 0 ? len / 2 : (len - 1) / 2);
  return len % 2 === 0 ? str : str + '수';
};

console.log(solution(3));
