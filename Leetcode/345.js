'use strict';

const reverseVowels = (s) => {
  const regex = /[aeiouAEIOU]/;
  let left = 0;
  let right = s.length - 1;
  let ret = s.split('');

  while (left <= right) {
    const a = s.charAt(left);
    const b = s.charAt(right);
    if (regex.test(a) && regex.test(b)) {
      const tmp = ret[left];
      ret[left] = ret[right];
      ret[right] = tmp;
      left++;
      right--;
      continue;
    }
    if (!regex.test(a)) {
      left++;
    }
    if (!regex.test(b)) {
      right--;
    }
  }
  return ret.join('');
};

console.log(reverseVowels('leetcode'));
