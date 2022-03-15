'use strict';

let graph;
let Info;
let answer = 0;
const result = [];

const calc = (route) => {
  let sheep = 0;
  let curSheep = 0;
  for (let i = 0; i < route.length; i++) {
    if (Info[route[i]] === 1) sheep += 1;
    curSheep += Info[route[i]];
    if (curSheep === 0) break;
  }
  answer = Math.max(sheep, answer);
};

const dfs = (cur, possible, idx, curSheep, depth) => {
  result[idx] = cur;
  if (cur !== 0 && curSheep === 0) {
    calc(result);
    return;
  }
  if (depth === Info.length - 1) {
    calc(result);
    return;
  }
  possible.splice(possible.indexOf(cur), 1);
  possible.push(...graph[cur]);
  possible.forEach((p) => {
    dfs(p, possible.slice(0), idx + 1, curSheep + Info[cur], depth + 1);
  });
};

const solution = (info, edges) => {
  Info = info.map((m) => (m === 0 ? +1 : -1));
  graph = [...Array(info.length)].map(() => []);
  edges.forEach((edge) => {
    const [belong, to] = edge;
    graph[belong].push(to);
  });
  dfs(0, [0], 0, 0, 0); //
  return answer;
};

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ],
  ),
);
