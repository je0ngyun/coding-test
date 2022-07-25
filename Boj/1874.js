'use strict';
/**
 * Boj 1874
 */
const qn = 1874;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const target = input
  .slice(1)
  .map((v) => Number(v))
  .reverse();
const stack = [];
const numArr = new Array(Number(input[0]))
  .fill(0)
  .map((_, idx) => idx + 1)
  .reverse();

const op = [];

while (numArr.length > 0) {
  if (stack[stack.length - 1] !== target[target.length - 1]) {
    stack.push(numArr.pop());
    op.push('+');
  }
  if (stack[stack.length - 1] === target[target.length - 1]) {
    op.push('-');
    target.pop();
    stack.pop();
  }
}

if (target.join('') === stack.join('')) {
  console.log(op.join('\n') + '\n' + Array(target.length).fill('-').join('\n'));
} else {
  console.log('NO');
}
