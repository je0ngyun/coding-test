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

const visited = Array(graph.length).fill(0);

const dfs = (start) => {
  if (visited[start] === 1) {
    return;
  }
  console.log(start);
  visited[start] = 1;
  for (let node of graph[start]) {
    dfs(node);
  }
};

const bfs = (start) => {
  const queue = [start];
  visited[start] = 1;
  while (queue.length) {
    const tgt = queue.shift();
    console.log(tgt);
    for (let node of graph[tgt]) {
      if (visited[node] === 0) {
        queue.push(node);
        visited[node] = 1;
      }
    }
  }
};

const permu = (arr, select, tmp = [], useAge = new Set(), ret = []) => {
  if (tmp.length === select) {
    ret.push(tmp);
    return;
  }
  arr.forEach((a) => {
    if (!useAge.has(a)) {
      tmp.push(a);
      useAge.add(a);
      permu(arr, select, tmp.slice(0), useAge, ret);
      tmp.pop(a);
      useAge.delete(a);
    }
  });
  return ret;
};

const combi = (arr, select, tmp = [], ret = [], depth = 0) => {
  if (depth > arr.length) {
    return;
  }
  if (tmp.length === select) {
    ret.push(tmp);
    return;
  }
  const t = tmp.slice(0);
  t.push(arr[depth]);
  combi(arr, select, t, ret, depth + 1);
  combi(arr, select, tmp.slice(0), ret, depth + 1);
  return ret;
};

const a = [1, 2, 3, 4, 5, 6, 7];
const binarySearch = (arr, left, right, tgt) => {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === tgt) {
      return mid;
    } else if (arr[mid] < tgt) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

//dfs(1);
//bfs(1);

console.log(binarySearch(a, 0, a.length - 1, 7));
console.log(permu([1, 2, 3, 4], 3));
console.log(combi([1, 2, 3, 4], 3));
