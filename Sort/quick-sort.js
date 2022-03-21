'use strict';
const arr = [5, 7, 9, 2, 4];

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const left = arr.slice(1).filter((f) => f <= pivot);
  const right = arr.slice(1).filter((f) => f > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(arr));

//in-place Quick Sort
const swap = function (array, front, back) {
  const tmp = array[front];
  array[front] = array[back];
  array[back] = tmp;
};

const lomutoPartition = function (array, start, end) {
  const pivotValue = array[end];
  let pivotIndex = start;

  for (let index = start; index < end; index++) {
    if (array[index] < pivotValue) {
      swap(array, index, pivotIndex);
      pivotIndex += 1;
    }
  }

  swap(array, pivotIndex, end);
  return pivotIndex;
};

const quickSortWithLomuto = function (
  array,
  start = 0,
  end = array.length - 1,
) {
  if (start >= end) return;
  let pivotIndex = lomutoPartition(array, start, end);
  quickSortWithLomuto(array, start, pivotIndex - 1);
  quickSortWithLomuto(array, pivotIndex + 1, end);

  return array;
};

console.log(quickSortWithLomuto(arr));
