'use strict';
// 케빈 베이컨의 6단계 법칙

const input = require('fs')
  .readFileSync('./Boj/input/1389.stdin')
  .toString()
  .trim()
  .split('\n')
  .map((inn) => inn.split(' ').map((ins) => Number(ins)));

const PN = input[0][0];

const result = Array(PN + 1).fill(0);

const graph = Array(input[0][0] + 1)
  .fill(0)
  .map(() => []);

input.slice(1).forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const bfs = (start) => {
  const visited = new Array(PN + 1).fill(false);
  const queue = [[start, 0]];
  visited[start] = true;
  while (queue.length) {
    const [node, weight] = queue.shift();
    result[start] += weight;
    for (const linked of graph[node]) {
      if (!visited[linked]) {
        visited[linked] = true;
        queue.push([linked, weight + 1]);
      }
    }
  }
};

for (let i = 1; i < PN + 1; i++) {
  bfs(i);
}

result.shift();

console.log(result.indexOf(Math.min(...result)) + 1);
