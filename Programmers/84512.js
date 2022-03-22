'use strict';

const words = ['A', 'E', 'I', 'O', 'U', ''];

const dfs = (depth = 0, tmp = [], ret = new Set()) => {
  if (depth > 4) {
    const joined = tmp.join('');
    if (joined !== '') {
      ret.add(joined);
    }
    return;
  }
  words.forEach((w) => {
    const t = tmp.slice(0);
    t.push(w);
    dfs(depth + 1, t, ret);
  });
  return ret;
};

function solution(word) {
  const result = [...dfs()];
  result.sort((a, b) => {
    if (a < b) return -1;
    if (b < a) return 1;
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    return 0;
  });
  return result.indexOf(word) + 1;
}

console.log(solution('AAAAE'));
