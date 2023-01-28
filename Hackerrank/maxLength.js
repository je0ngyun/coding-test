'use strict';

function maxLength(a, k) {
  let maxLength = 0;
  let recordI = 0;
  let recordJ = 0;

  for (let i = 0; i < a.length; i++) {
    const chunk = [];
    let sum = 0;
    for (let j = i; j < a.length; j++) {
      chunk.push(a[j]);
      console.log(chunk);
      sum += a[j];
      if (sum <= k) {
        if (j - i > recordJ - recordI) {
          recordI = i;
          recordJ = j;
          maxLength = chunk.length;
        }
      }
    }
  }

  return maxLength;
}

console.log(maxLength([1, 2, 1, 4], 4));
