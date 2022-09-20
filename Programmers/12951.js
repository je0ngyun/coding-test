'use strict';

function solution(s) {
  return s
    .split(' ')
    .map((v) => {
      if (v.length > 1) {
        return v.slice(0, 1).toUpperCase() + v.slice(1).toLowerCase();
      }
      return v.slice(0, 1).toUpperCase();
    })
    .join(' ');
}
