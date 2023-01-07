'use strict';

const minimumRounds = (tasks) => {
  let count = 0;
  const storage = {};
  const setStorage = (num) =>
    storage[num] ? storage[num].push(num) : (storage[num] = [num]);
  tasks.forEach(setStorage);
  for (const [_, group] of Object.entries(storage)) {
    if (group.length === 1) return -1;
    count += Math.floor((group.length + 2) / 3);
  }
  return count;
};

console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4]));
