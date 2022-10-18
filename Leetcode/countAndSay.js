'use strict';

const say = (num) => {
  return num
    .match(/(\d)\1*/g)
    .map((group) => `${group.length}${group.charAt(0)}`)
    .join('');
};

const countAndSay = (n) => {
  if (Number.isInteger(n)) n = String(n);
  if (n === '1') return '1';
  return say(countAndSay(String(Number(n) - 1)));
};

console.log(countAndSay(4));
