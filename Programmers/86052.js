'use strict';

let map;
const answer = [];

const computed = {
  S: {
    up: 'up',
    right: 'right',
    down: 'down',
    left: 'left',
  },
  L: {
    up: 'left',
    right: 'up',
    down: 'right',
    left: 'down',
  },
  R: {
    up: 'right',
    right: 'down',
    down: 'left',
    left: 'up',
  },
};

const move = {
  up: [-1, 0],
  right: [0, 1],
  down: [1, 0],
  left: [0, -1],
};

const task = function (x, y, arrow, depth) {
  const [grid, direction] = map[x][y];
  const nextArrow = computed[grid][arrow];
  if (direction[nextArrow] === 1) {
    answer.push(depth);
    return false;
  } else {
    direction[nextArrow] = 1;
    let nx = x + move[nextArrow][0];
    let ny = y + move[nextArrow][1];

    if (nx < 0) nx = map.length - 1;
    if (nx > map.length - 1) nx = 0;
    if (ny < 0) ny = map[0].length - 1;
    if (ny > map[0].length - 1) ny = 0;

    return [nx, ny, nextArrow, depth + 1];
  }
};

const loop = function (arg) {
  //재귀 스택 초과로 인해 루프로 변경
  if (!arg) return;
  while (true) {
    let [nx, ny, nextArrow, depth] = arg;
    arg = task(nx, ny, nextArrow, depth);
    if (!arg) break;
  }
};

const solution = (grid) => {
  map = grid.map((m) =>
    m.split('').map((mm) => [mm, { up: 0, right: 0, down: 0, left: 0 }]),
  );

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      const direction = map[i][j][1];
      for (const key in direction) {
        if (direction[key] === 0) {
          direction[key] = 1;
          let nx = i + move[key][0];
          let ny = j + move[key][1];
          if (nx < 0) nx = map.length - 1;
          if (nx > map.length - 1) nx = 0;
          if (ny < 0) ny = map[0].length - 1;
          if (ny > map[0].length - 1) ny = 0;
          loop(task(nx, ny, key, 1));
        }
      }
    }
  }

  return answer.sort((a, b) => a - b);
};

console.log(solution(['SR', 'LR', 'LL']));
