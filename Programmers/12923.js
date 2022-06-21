'use strict';

const getDivisors = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (num / i < 10000000) {
        return num / i;
      }
    }
  }
  return 1;
};

const solution = (begin, end) => {
  const section = Array(end - begin + 1).fill(1);

  return section.map((_, idx) => {
    const uidx = idx + begin;
    if (uidx === 1) return 0;
    return getDivisors(uidx);
  });
};

console.log(solution(2, 10));
