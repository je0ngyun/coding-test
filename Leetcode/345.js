'use strict';

const reverseVowels = (s) => {
  let left = 0;
  let right = s.length - 1;
  let ret = s.split('');

  while (left <= right) {
    const a = s.charAt(left);
    const b = s.charAt(right);
    if ('aeiouAEIOU'.includes(a) && 'aeiouAEIOU'.includes(b)) {
      const tmp = ret[left];
      ret[left] = ret[right];
      ret[right] = tmp;
      left++;
      right--;
      continue;
    }
    if (!'aeiou'.includes(a)) {
      left++;
    }
    if (!'aeiou'.includes(b)) {
      right--;
    }
  }

  return ret.join('');
};

console.log(reverseVowels('leetcode'));
