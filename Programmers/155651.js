'use strict';

const getMin = (dateFormat, plusMin = 0) => {
  const date = new Date(`2022-01-01 ${dateFormat}:00`);
  date.setMinutes(date.getMinutes() + plusMin);
  return date.getHours() * 60 + date.getMinutes();
};

function solution(book_time) {
  const arr = new Array(1450).fill(0);
  for (const [start, end] of book_time) {
    arr[getMin(start)] += 1;
    arr[getMin(end) + 10] += -1;
  }
  for (let i = 1; i < arr.length; i++) {
    arr[i] += arr[i - 1];
  }
  return Math.max(...arr);
}
