'use strict';

const bfs = function (maps) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let queue = [[0, 0]];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || nx >= maps.length || ny < 0 || ny >= maps[0].length)
        continue;
      if (maps[nx][ny] !== 0 && maps[nx][ny] === 1) {
        queue.push([nx, ny]);
        maps[nx][ny] = maps[x][y] + 1;
      }
    }
  }
  return maps[maps.length - 1][maps[0].length - 1];
};

const solution = function (maps) {
  const answer = bfs(maps);
  return answer === 1 ? -1 : answer;
};

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]),
);
