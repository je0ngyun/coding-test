'use strict';

const combi = function (x, max, value, ret) {
  if (x > max.length - 1) {
    if (value === '') return;
    ret.push(value.split('').map((n) => +n));
  } else {
    combi(x + 1, max, value + '', ret);
    combi(x + 1, max, value + max[x], ret);
  }
  return ret.sort((a, b) => a.length - b.length);
};

const rep = function (relation) {
  const ret = [...Array(relation[0].length)].map(() => new Array());
  relation.forEach((r) =>
    r.forEach((rr, i) => {
      ret[i].push(rr);
    }),
  );
  return ret;
};

const test = function (relation, arr) {
  let ret = [...Array(relation[0].length)].map(() => new Array());
  arr.forEach((a) => {
    relation[a].forEach((r, i) => ret[i].push(r));
  });
  if (ret.length === new Set(ret.map((m) => m.join(','))).size) {
    return true;
  }
  return false;
};

const fil = function (arr, con) {
  return arr.filter((m) => {
    let cnt = 0;
    con.forEach((c) => {
      if (m.includes(c)) {
        cnt += 1;
      }
    });
    return cnt === con.length ? false : true;
  });
};

const solution = function (relation) {
  let answer = 0;
  const r = rep(relation);
  let c = combi(0, [...Array(r.length).keys()], '', [])
    .sort()
    .sort((a, b) => a.length - b.length)
    .reverse();

  while (c.length > 0) {
    const q = c.pop();
    if (test(r, q)) {
      answer += 1;
      c = fil(c, q);
    }
  }
  return answer;
};

console.log(
  solution([
    ['a', '1', 'aaa', 'c', 'ng'],
    ['a', '1', 'bbb', 'e', 'g'],
    ['c', '1', 'aaa', 'd', 'ng'],
    ['d', '2', 'bbb', 'd', 'ng'],
  ]),
);
