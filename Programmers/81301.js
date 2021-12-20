'use strict';

const value = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function solution(s) {
  value.forEach((v, i) => {
    const regexp = new RegExp(`${v}`, 'g');
    s = s.replace(regexp, i);
  });
  return Number(s);
}

console.log(solution('oneoneone'));
