'use strict';

const firstUniqChar = (s) =>
  Object.entries(
    s.split('').reduce((acc, cur, idx) => {
      acc[cur] ? acc[cur].cnt++ : (acc[cur] = { cnt: 1, idx });
      return acc;
    }, {}),
  ).filter(([_, { cnt }]) => cnt === 1)[0]?.[1].idx ?? -1;

console.log(firstUniqChar('leetcode'));
