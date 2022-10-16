'use strict';

const record = [0, 0];
const visited = new Set([]);

const recordScore = (score) => {
  if (score > record[0] || score > record[1]) {
    const idx = record.indexOf(Math.min(...record));
    record[idx] = score;
  }
};

const dfs = (cards, start, depth = 0) => {
  if (visited.has(start)) {
    if (depth) recordScore(depth);
    return;
  }
  visited.add(start);
  dfs(cards, cards[start - 1], depth + 1);
};

const solution = (cards) => {
  for (let i = 1; i <= cards.length; i++) {
    dfs(cards, i);
  }

  return record[0] * record[1];
};

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));
