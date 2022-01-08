'use strict';

let ALL_CASE_MAP = new Map();

const extract = function (query) {
  return query.map((q) => {
    return [
      q
        .split(' ')
        .slice(0, -1)
        .filter((v) => v !== 'and')
        .join(''),
      Number(q.split(' ').slice(-1).join('')),
    ];
  });
};

const bsGo = (arr, tgt) => {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = parseInt((left + right) / 2);
    if (arr[mid] < tgt) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

const makeKey = function (x, candidate, value, depth) {
  if (depth > 3) {
    if (ALL_CASE_MAP.has(x)) {
      ALL_CASE_MAP.set(x, [...ALL_CASE_MAP.get(x), value]);
    } else {
      ALL_CASE_MAP.set(x, [value]);
    }
  } else {
    makeKey(x + '-', candidate, value, depth + 1);
    makeKey(x + candidate[depth], candidate, value, depth + 1);
  }
};

const solution = function (info, query) {
  info.forEach((i) => {
    const spl = i.split(' ');
    const candidate = spl.slice(0, -1);
    const value = Number(spl.slice(-1));
    makeKey('', candidate, value, 0);
  });
  for (const [k, v] of ALL_CASE_MAP) {
    v.sort((a, b) => a - b);
  }
  return extract(query).map((q) => {
    const g = ALL_CASE_MAP.get(q[0]);
    if (g) {
      const index = bsGo(g, q[1]);
      return g.length - index;
    } else {
      return 0;
    }
  });
};

console.log(
  solution(
    [
      'java backend junior pizza 150',
      'python frontend senior chicken 210',
      'python frontend senior chicken 150',
      'cpp backend senior pizza 260',
      'java backend junior chicken 80',
      'python backend senior chicken 50',
    ],
    [
      'java and backend and junior and pizza 100',
      'python and frontend and senior and chicken 200',
      'cpp and - and senior and pizza 250',
      '- and backend and senior and - 150',
      '- and - and - and chicken 100',
      '- and - and - and - 150',
      't and t and t and t 330',
    ],
  ),
);
