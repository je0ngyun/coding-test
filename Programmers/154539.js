'use strict';
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  get head() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }

  push(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  pop() {
    let smallest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return smallest;
  }
}

//min heap
//결과 배열은 일단 모두 -1
//min heap에 가장 첫번째 값을 넣은 상태로 시작
//idx 1부터 for 문을 돌며 heap의 head에 있는값보다 크면 작거나 힙이 빌때까지 빼면서 결과 배열 변경

function solution(numbers) {
  let curIdx = 0;
  const ans = Array(numbers.length).fill(-1);
  const heap = new MinHeap();
  const indexMap = {};

  for (let i = numbers.length - 1; i >= 0; i--) {
    const v = numbers[i];
    indexMap[v] ? indexMap[v].push(i) : (indexMap[v] = [i]);
  }

  heap.push(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    const curValue = numbers[i];
    while (heap.head && heap.head < curValue) {
      const curHead = heap.pop();
      ans[indexMap[curHead].pop()] = curValue;
    }
    heap.push(curValue);
  }

  return ans;
}

console.log(solution([9, 1, 5, 3, 6, 2]));
