'use strict';

const solution = (q1, q2) => {
  let count = -1;
  let q1Sum = q1.reduce((a, b) => a + b);
  let q2Sum = q2.reduce((a, b) => a + b);
  let l = 0;
  let r = 0;
  let maxLoop = q1.length + 1 * q2.length + 1;
  while (q1.length && q2.length) {
    maxLoop--;
    count++;
    if (q1Sum === q2Sum) return count;
    if (maxLoop <= 0) return -1;
    if (q1Sum > q2Sum) {
      const value = q1[l++ % q1.length];
      q1Sum -= value;
      q2.push(value);
      q2Sum += value;
    } else {
      const value = q2[r++ % q2.length];
      q2Sum -= value;
      q1.push(value);
      q1Sum += value;
    }
  }
  return -1;
};

console.log(solution([1, 1], [1, 5]));
