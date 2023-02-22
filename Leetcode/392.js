'use strict';

const isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (true) {
    if (i === s.length) return true;
    if (j === t.length) return false;
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
};

console.log(isSubsequence('ab', 'baab'));
