'use strict';

const minDeletionSize = (strs) => {
  let cnt = 0;
  for (let i = 0; i < strs[0].length; i++) {
    const codes = [];
    for (let j = 0; j < strs.length; j++) {
      codes.push(strs[j].charCodeAt(i));
    }
    const origin = codes.join('');
    codes.sort((a, b) => a - b);
    if (origin === codes.join('')) continue;
    cnt++;
  }
  return cnt;
};

console.log(minDeletionSize(['zyx', 'wvu', 'tsr']));
