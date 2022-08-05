'use strict';

class PQueue {
  constructor() {
    this._queue = [Infinity];
    this.lastIdx = 0;
  }

  get length() {
    return this._queue.length - 1;
  }

  get queue() {
    return this._queue.slice(1);
  }

  enque(data) {
    this._queue.push(data);
    this.lastIdx += 1;

    for (let i = this.lastIdx; i > 1; i = Math.floor(i / 2)) {
      const parentIdx = Math.floor(i / 2);
      if (this._queue[parentIdx] > data) return;
      const tmp = this._queue[parentIdx];
      this._queue[parentIdx] = this._queue[i];
      this._queue[i] = tmp;
    }
  }
  deque() {
    const ret = this._queue[1];
    this._queue[1] = this._queue[this.lastIdx];
    this._queue.pop();
    this.lastIdx -= 1;

    let refIdx = 1;
    while (refIdx <= Math.floor(this.lastIdx / 2)) {
      const current = this._queue[refIdx];
      const leftChild = this._queue[refIdx * 2] ?? -Infinity;
      const rightChild = this._queue[refIdx * 2 + 1] ?? -Infinity;
      if (current >= leftChild && current >= rightChild) break;

      const largestChildIdx =
        leftChild > rightChild ? refIdx * 2 : refIdx * 2 + 1;

      this._queue[refIdx] = this._queue[largestChildIdx];
      this._queue[largestChildIdx] = current;

      refIdx = largestChildIdx;
    }

    return ret;
  }
}

const pq = new PQueue();

const a = [5, 6, 7, 4, 3, 5, 9, 8, 7];

a.forEach((v) => pq.enque(v));

while (pq.length) {
  console.log(pq.deque());
}
