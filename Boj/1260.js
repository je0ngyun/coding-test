'use strict';
/**
 * Boj 1260
 */
const qn = 1260;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const [info, ...nodes] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const dfsResult = [];
const bfsResult = [];
let graph = Array.from({ length: +info.split(' ')[0] + 1 }, () => []);

nodes.forEach((nodeInfo) => {
  const [from, to] = nodeInfo.split(' ').map((v) => +v);
  graph[from].push(to);
  graph[to].push(from);
});

graph = graph.map((arr) => arr.sort((a, b) => a - b));

let visited = new Set();

const dfs = (start) => {
  if (visited.has(start)) return;
  dfsResult.push(start);
  visited.add(start);
  for (const node of graph[start]) {
    dfs(node);
  }
};

dfs(+info.split(' ')[2]);

visited = new Set();

const bfs = (start) => {
  const queue = [start];
  visited.add(start);
  while (queue.length) {
    const shifted = queue.shift();
    bfsResult.push(shifted);
    for (const node of graph[shifted]) {
      if (visited.has(node)) continue;
      queue.push(node);
      visited.add(node);
    }
  }
};

bfs(+info.split(' ')[2]);

console.log(dfsResult.join(' ') + '\n' + bfsResult.join(' '));
