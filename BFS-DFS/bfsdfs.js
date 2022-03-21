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

// 다른 형식으로 작성해보기
const combi = (arr, select, tmp = [], ret = [], depth = 0) => {
  if (tmp.length === select) {
    ret.push(tmp);
    return;
  }
  if (depth >= arr.length) {
    return;
  }
  const t = tmp.slice(0);
  t.push(arr[depth]);
  combi(arr, select, t, ret, depth + 1);
  combi(arr, select, tmp.slice(0), ret, depth + 1);
  return ret;
};

const permu = (arr, select, tmp = [], ret = [], isUsage = new Set()) => {
  if (tmp.length === select) {
    ret.push(tmp);
    return;
  }
  arr.forEach((p, i) => {
    if (!isUsage.has(i)) {
      tmp.push(p);
      isUsage.add(i);
      permu(arr, select, tmp.slice(0), ret, isUsage);
      tmp.pop();
      isUsage.delete(i);
    }
  });
  return ret;
};
