'use strict';
/**
 * Boj 1541 잃어버린 괄호
 */
const qn = 1541;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

// +, -, 숫자만 존재하므로 그리디 접근.
// - 부터 다음 - 까지의 수식을 먼저 계산 하면 최솟값이 나온다.
const str = require('fs').readFileSync(filePath).toString().trim();
const result = str.split('-').map((v) => {
  if (/\+/g.test(v))
    return v.split('+').reduce((a, b) => Number(a) + Number(b));
  return v;
});

console.log(result.reduce((a, b) => Number(a) - Number(b)));
