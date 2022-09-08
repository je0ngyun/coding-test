'use strict';

const getScores = (person, answers, pNum) => {
  return [
    answers.filter((v, i) => {
      const index = i % person.length;
      if (v === person[index]) return true;
      return false;
    }).length,
    pNum,
  ];
};

const solution = (answers) => {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const pAns = [
    getScores(p1, answers, 1),
    getScores(p2, answers, 2),
    getScores(p3, answers, 3),
  ];

  const max = Math.max(...pAns.map((v) => v[0]));
  const result = pAns.filter((v) => v[0] === max).map((v) => v[1]);
  result.sort((a, b) => (a > b ? 1 : -1));
  return result;
};

console.log(solution([1, 3, 2, 4, 2]));
