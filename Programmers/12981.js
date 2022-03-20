'use strict';

function solution(n, words) {
  const said = [words[0]];
  let tgt = 0;
  for (let i = 1; i < words.length; i++) {
    if (said.includes(words[i])) {
      tgt = i;
      break;
    }
    if (words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      tgt = i;
      break;
    }
    said.push(words[i]);
  }
  return !tgt ? [0, 0] : [(tgt % n) + 1, Math.floor(tgt / n) + 1];
}
console.log(
  solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']),
);
