"use strict";
/**
 * Boj 1874
 */
const qn = 1874;
const filePath =
  process.platform === "linux" ? "./dev/stdin" : `./Boj/input/${qn}.stdin`;

const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const target = input
  .slice(1)
  .map((v) => Number(v))
  .reverse();
const stack = [];
const numArr = new Array(Number(input[0]))
  .fill(0)
  .map((_, idx) => idx + 1)
  .reverse();

console.log(numArr);
console.log(target);

while (numArr.length) {
  if (!stack.length) {
    stack.push(numArr.pop());
  }
  if (target[target.length - 1] !== numArr[numArr.length - 1]) {
    stack.push(numArr.pop());
  }
  if (target[target.length - 1] === numArr[numArr.length - 1]) {
    stack.pop();
    target.pop();
  }
  console.log(stack);
}
