'use strict';

const solution = (s) => {
  const max = s.length / 2;
  if (!Number.isInteger(max)) return false;
  let le = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? (le += 1) : (le -= 1);
    if (le < 0) return false;
  }
  return le === 0 ? true : false;
};

console.log(solution('(()()())))'));
