'use strict';

const solution = (s) => {
  const answer = [];
  const record = new Map();
  for (let i = 0; i < s.length; i++) {
    if (record.has(s[i])) answer[i] = i - record.get(s[i]);
    else answer[i] = -1;
    record.set(s[i], i);
  }
  return answer;
};

console.log(solution('banana'));
