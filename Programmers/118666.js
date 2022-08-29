'use strict';

const solution = (survey, choices) => {
  const result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const types = ['RT', 'CF', 'JM', 'AN'];

  survey.forEach((compare, idx) => {
    const [a, b] = compare;
    const score = choices[idx];
    result[score > 4 ? b : a] += Math.abs(score - 4);
  });

  return types.map(([a, b]) => (result[b] > result[a] ? b : a)).join('');
};

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
