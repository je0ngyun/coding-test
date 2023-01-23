'use strict';

const dayPlus = (dayStr, m) => {
  let [y, n, d] = dayStr.split('.').map((v) => +v);
  for (let i = 1; i <= m; i++) {
    n++;
    if (n > 12) {
      n = 1;
      y++;
    }
  }
  return Number([y, n, d].map((v) => v.toString().padStart(2, '0')).join(''));
};

const solution = (today, terms, privacies) => {
  let answer = [];
  const termsMap = {};
  terms.forEach((term) => {
    const [al, num] = term.split(' ');
    termsMap[al] = num;
  });

  const todayNum = Number(today.split('.').join(''));
  privacies.forEach((privacy, idx) => {
    const [a, b] = privacy.split(' ');
    const dayNum = dayPlus(a, termsMap[b]);
    if (todayNum >= dayNum) answer.push(idx + 1);
  });

  return answer;
};

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
  ),
);
