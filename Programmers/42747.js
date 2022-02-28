'use strict';

const solution = (citations) => {
  const max = Math.max(...citations);
  const result = [];
  for (let i = 0; i <= max; i++) {
    const q = citations.filter((cc) => i <= cc).length;
    const nq = citations.length - q;
    if (i <= q && i >= nq) {
      result.push(i);
    }
  }
  return Math.max(...result);
};

console.log(solution([3, 0, 6, 1, 5]));
