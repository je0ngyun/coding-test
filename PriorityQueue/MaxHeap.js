class MaxHeap {
  constructor() {
    this.arr = [];
  }
  size() {
    return this.arr.length;
  }
  push(value) {
    let idx = this.arr.length;
    this.arr.push(value);
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.arr[parent] >= this.arr[idx]) break;
      [this.arr[parent], this.arr[idx]] = [this.arr[idx], this.arr[parent]];
      idx = parent;
    }
  }
  pop() {
    [this.arr[0], this.arr[this.arr.length - 1]] = [
      this.arr[this.arr.length - 1],
      this.arr[0],
    ];
    const ret = this.arr.pop();
    let idx = 0;
    while (idx < this.arr.length) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let next = left;
      if (left >= this.arr.length) break;
      if (right < this.arr.length && this.arr[right] > this.arr[left])
        next = right;
      if (this.arr[idx] >= this.arr[next]) break;
      [this.arr[idx], this.arr[next]] = [this.arr[next], this.arr[idx]];
      idx = next;
    }
    return ret;
  }
}

const m = new MaxHeap();

for (let i = 0; i <= 9; i++) {
  m.push(i);
}

while (m.size()) {
  console.log(m.pop());
}
