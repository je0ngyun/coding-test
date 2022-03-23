'use strict';

class Cache {
  constructor(size) {
    this.size = size;
    this.arr = [];
  }
  addItem(item) {
    if (this.arr.length >= this.size) {
      this.arr.shift();
      this.arr.push(item);
    } else {
      this.arr.push(item);
    }
  }
  isHit(item) {
    const idx = this.arr.indexOf(item);
    if (idx !== -1) {
      this.arr.splice(idx, 1);
      this.arr.push(item);
      return true;
    }
    return false;
  }
}

const solution = (cacheSize, cities) => {
  if (!cacheSize) return cities.length * 5;
  let ans = 0;
  const cache = new Cache(cacheSize);
  for (let city of cities.map((c) => c.toUpperCase())) {
    if (!cache.isHit(city)) {
      cache.addItem(city);
      ans += 5;
    } else {
      ans += 1;
    }
  }
  return ans;
};

console.log(solution(0, ['LA', 'LA']));
