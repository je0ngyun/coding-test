'use strict';

let graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

let visited = new Array(graph.length).fill(0);

const dfs = function (start) {
  if (visited[start] == 1) {
    return;
  }
  visited[start] = 1;
  console.log(start);
  for (let item of graph[start]) {
    dfs(item);
  }
};

const bfs = function (start) {
  let queue = [start];
  visited[start] = 1;
  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);
    for (let item of graph[node]) {
      if (visited[item] == 0) {
        queue.push(item);
        visited[item] = 1;
      }
    }
  }
};
