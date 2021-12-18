'use strict';

function solution(new_id) {
  let answer = '';
  answer = new_id.toLowerCase();
  answer = answer.replace(/[^\w-_.]/g, '');
  answer = answer.replace(/\.+/g, '.');
  answer = answer.replace(/^\.|\.$/g, '');
  answer = answer.replace(/^$/, 'a');
  answer = answer.slice(0, 15).replace(/\.$/, '');
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

console.log(solution('abcdefghijklmn.p'));
