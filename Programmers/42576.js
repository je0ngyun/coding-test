'use strict';

const solution = (p, c) => {
  const pObj = {};
  const cObj = {};
  const hasedP = p.map((v) => {
    if (!pObj[v]) {
      pObj[v] = 0;
      return `${v}-${pObj[v]++}`;
    } else {
      return `${v}-${pObj[v]++}`;
    }
  });
  const setC = new Set(
    c.map((v) => {
      if (!cObj[v]) {
        cObj[v] = 0;
        return `${v}-${cObj[v]++}`;
      } else {
        return `${v}-${cObj[v]++}`;
      }
    }),
  );
  return hasedP.filter((v) => !setC.has(v))[0].split('-')[0];
};

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']),
);
