'use strict';

const allCase = [];
const dfs = (info, n, arrow, idx, cur) => {
  if (arrow >= n) {
    let t = cur
      .slice(1)
      .split(',')
      .map((m) => +m);

    if (info.length - t.length !== 0) {
      t = [...t, ...Array(info.length - t.length).fill(0)];
    }
    allCase.push(t);
    return;
  }
  if (idx >= info.length) {
    allCase.push(
      cur
        .slice(1)
        .split(',')
        .map((m) => +m),
    );
    return;
  }
  if (arrow + info[idx] + 1 <= n) {
    dfs(
      info,
      n,
      arrow + info[idx] + 1,
      idx + 1,
      cur + ',' + Number(info[idx] + 1),
    );
  }
  dfs(info, n, arrow, idx + 1, cur + ',0');
  return;
};

const solution = (n, info) => {
  dfs(info, n, 0, 0, '');
  const result = allCase.map((ca, idx) => {
    const apeach = info
      .map((v, i) => (v >= ca[i] ? v : 0))
      .map((m, i) => (m !== 0 ? 10 - i : 0))
      .reduce((a, b) => a + b, 0);
    const lion = ca
      .map((m, i) => (m !== 0 ? 10 - i : 0))
      .reduce((a, b) => a + b, 0);
    return [lion - apeach, ca, apeach];
  });

  if (result.every((e) => 0 > e[0])) return [-1];

  const max = Math.max(...result.map((m) => m[0]));
  const candidate = result.filter((f) => f[0] === max).map((m) => m[1]);

  const cmax = Math.max(
    ...candidate.map((m) =>
      m.map((mm, i) => (i + 1) * mm).reduce((a, b) => a + b),
    ),
  );

  let ret = candidate.filter(
    (m) => m.map((mm, i) => (i + 1) * mm).reduce((a, b) => a + b) === cmax,
  )[0];

  const apeach = info
    .map((v, i) => (v >= ret[i] ? v : 0))
    .map((m, i) => (m !== 0 ? 10 - i : 0))
    .reduce((a, b) => a + b, 0);

  const lion = ret
    .map((m, i) => (m !== 0 ? 10 - i : 0))
    .reduce((a, b) => a + b, 0);

  if (apeach === lion) return [-1];

  const num = ret.reduce((a, b) => a + b, 0);
  if (num < n) {
    ret[ret.length - 1] += n - num;
  }
  return ret;
};

console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
