'use strict';

const solution = (babbling) => {
  const words = ['ye', 'aya', 'woo', 'ma'];
  const test = words.map((w) => new RegExp(`(${w}){2,}`));
  const a = babbling.filter((b) => {
    let flag = true;
    test.forEach((t) => {
      if (t.test(b)) flag = false;
    });
    return flag;
  });
  const b = a.filter((b) => {
    for (const w of words) {
      b = b.replace(new RegExp(w, 'g'), ' ');
    }
    return b.trim() === '' ? true : false;
  });
  return b.length;
};

console.log(solution(['ayawoomayeayawoo']));
