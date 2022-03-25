'use strict';

const getPossible = (skill) => {
  const ret = new Set();
  const arr = skill.split('');
  while (arr.length) {
    ret.add(arr.join(''));
    arr.pop();
  }
  return ret;
};

const solution = (skill, skill_trees) => {
  const rxp = skill.split('').join('|');
  const possible = getPossible(skill);
  const result = skill_trees
    .map((sk) => {
      return (sk.match(new RegExp(rxp, 'g')) || [skill]).join('');
    })
    .filter((f) => possible.has(f)).length;
  return result;
};

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
