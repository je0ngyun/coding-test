'use strict';

const imap = {};
const rmap = {};
const solution = (id_list, report, k) => {
  id_list.forEach((id) => {
    imap[id] = new Set();
    rmap[id] = 0;
  });

  report.forEach((re) => {
    const [a, b] = re.split(' ');
    imap[a].add(b);
  });

  Object.entries(imap)
    .map((m) => [m[0], [...m[1]]])
    .forEach((fo) => {
      fo[1].forEach((ff) => rmap[ff]++);
    });

  const tgts = Object.entries(rmap)
    .filter((f) => f[1] >= k)
    .map((m) => m[0]);

  return Object.entries(imap)
    .map((m) => [...m[1]])
    .map((m) => m.filter((f) => tgts.includes(f)).length);
};

console.log(
  solution(
    ['con', 'ryan'],
    ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
    3,
  ),
);
