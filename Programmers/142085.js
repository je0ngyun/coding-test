'use strict';
function createHeap() {
  const arr = [];
  function size() {
    return arr.length;
  }
  function push(value) {
    let idx = arr.length;
    arr.push(value);
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (arr[parent] >= arr[idx]) break;
      [arr[parent], arr[idx]] = [arr[idx], arr[parent]];
      idx = parent;
    }
  }
  function pop() {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    const ret = arr.pop();
    let idx = 0;
    while (idx < arr.length) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let next = left;
      if (left >= arr.length) break;
      if (right < arr.length && arr[right] > arr[left]) next = right;
      if (arr[idx] >= arr[next]) break;
      [arr[idx], arr[next]] = [arr[next], arr[idx]];
      idx = next;
    }
    return ret;
  }
  return { size, push, pop };
}

function solution(n, k, enemy) {
  const heap = createHeap();
  for (let i = 0; i < enemy.length; i++) {
    heap.push(enemy[i]);
    if (n < enemy[i]) {
      if (k > 0) {
        n += heap.pop();
        k--;
      }
      if (n < enemy[i]) return i;
    }
    n -= enemy[i];
  }
  return enemy.length;
}

console.log(solution(2, 4, [3, 3, 3, 3]));
