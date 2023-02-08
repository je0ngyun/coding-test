'use strict';

class MyQueue {
  constructor(arg) {
    this.arr = arg ? [...arg] : [];
    this.head = 0;
  }
  push(arg) {
    this.arr.push(arg);
  }
  shift() {
    const val = this.arr[this.head];
    delete this.arr[this.head];
    this.head++;
    return val;
  }
  size() {
    return this.arr.length - this.head;
  }
}

function solution(x, y, n) {
  const dic = {};
  let ans = Infinity;
  const bfs = () => {
    //튜플 [값,레벨]
    const queue = new MyQueue([[x, 0]]);
    while (queue.size()) {
      const [value, lv] = queue.shift();
      if (dic[value] <= lv) {
        continue;
      } else {
        dic[value] = lv;
      }
      if (value === y) ans = Math.min(ans, lv);
      if (value + n <= y) queue.push([value + n, lv + 1]);
      if (value * 2 <= y) queue.push([value * 2, lv + 1]);
      if (value * 3 <= y) queue.push([value * 3, lv + 1]);
    }
  };

  bfs();
  return ans === Infinity ? -1 : ans;
}

console.log(solution(10, 40, 5));
