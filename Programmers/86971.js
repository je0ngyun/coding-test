'use strict';

let visited;
let graph;

const dfs = (start) => {
  visited[start] = 1;
  for (let node of graph[start]) {
    if (!visited[node]) dfs(node);
  }
};

const solution = (n, wires) => {
  let answer = Infinity;
  visited = new Array(n).fill(0);
  for (let i = 1; i < wires.length + 1; i++) {
    graph = [...new Array(n + 1)].map(() => []);
    wires.forEach((w) => {
      if (w !== wires[i - 1]) {
        const [a, b] = w;
        graph[a].push(b);
        graph[b].push(a);
      }
    });
    dfs(1);
    const a = visited.slice(1).filter((v) => v).length;
    const b = n - a;
    answer = Math.min(answer, Math.abs(a - b));
    visited = new Array(n).fill(0);
  }
  return answer;
};

// console.log(
//   solution(4, [
//     [1, 2],
//     [2, 3],
//     [3, 4],
//   ]),
// );

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ]),
);
