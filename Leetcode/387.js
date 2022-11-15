'use strict';

const firstUniqChar = (s) =>
  Object.entries(
    s.split('').reduce((acc, cur, idx) => {
      acc[cur] ? acc[cur].cnt++ : (acc[cur] = { cnt: 1, idx });
      return acc;
    }, {}),
  ).find(([_, { cnt }]) => cnt === 1)?.[1].idx ?? -1;

console.log(firstUniqChar('leetcode'));
