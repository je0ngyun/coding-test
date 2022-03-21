'use strict';

const merge = (a, b) => {
  const sorted = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < a.length && p2 < b.length) {
    if (a[p1] < b[p2]) {
      sorted.push(a[p1]);
      p1++;
    } else {
      sorted.push(b[p2]);
      p2++;
    }
  }
  sorted.push(...a.slice(p1), ...b.slice(p2));
  return sorted;
};

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return [arr[0]];
  }
  const mid = arr.length / 2;
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};

console.log(mergeSort([1, 0, 3, 5, 2, 4, 6]));
