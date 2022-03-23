'use strict';

const delZero = (s) => {
  return [
    !s.match(/0/g) ? 0 : s.match(/0/g).length,
    s.replace(/0/g, '').length.toString(2),
  ];
};

const solution = (s) => {
  let round = 0;
  let delCount = 0;

  while (s !== '1') {
    const [deleted, newStr] = delZero(s);
    s = newStr;
    delCount += deleted;
    round++;
  }

  return [round, delCount];
};

console.log(solution('1111111'));
