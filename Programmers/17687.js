'use strict';

const solution = (n, t, m, p) => {
  const ans = [];
  let i = 0;
  let words = '';
  while (words.length < t * m * p) {
    words += i.toString(n);
    i++;
  }
  for (let j = p; ans.length < t; j += m) {
    ans.push(words[j - 1]);
  }
  return ans.join('').toUpperCase();
};

console.log(solution(16, 16, 2, 2));
