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

const arr = [1, 2, 3, 4, 5];
const selectNum = 3;
const visit = Array(arr.length).fill(false);
let set = [];

const perm = (len, ret = []) => {
  if (len == selectNum) {
    ret.push([...set]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!visit[i]) {
      set[len] = arr[i];
      visit[i] = true;
      perm(len + 1, ret);
      visit[i] = false;
    }
  }
  return ret;
};

const comb = (len, k, ret = []) => {
  if (len == selectNum) {
    ret.push([...set]);
    return;
  }
  if (k == arr.length) return;
  set[len] = arr[k];
  comb(len + 1, k + 1, ret);
  comb(len, k + 1, ret);
  return ret;
};

console.log(perm(0));
console.log(comb(0, 0));
