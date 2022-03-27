'use strict';

const getNext = (cur, dir) => {
  const moveCase = {
    U: [1, 0],
    D: [-1, 0],
    L: [0, -1],
    R: [0, 1],
  };
  return [moveCase[dir][0] + cur[0], moveCase[dir][1] + cur[1]];
};

const solution = (dirs) => {
  const xy = [0, 0];
  const route = new Set();

  for (let dir of dirs.split('')) {
    const [nx, ny] = getNext(xy, dir);
    if (nx < 6 && nx > -6 && ny < 6 && ny > -6) {
      if (
        !route.has(`belong${xy[0]}${xy[1]}to${nx}${ny}`) &&
        !route.has(`belong${nx}${ny}to${xy[0]}${xy[1]}`)
      )
        route.add(`belong${xy[0]}${xy[1]}to${nx}${ny}`);
      xy[0] = nx;
      xy[1] = ny;
    }
  }
  console.log(route);
  return route.size;
};

console.log(solution('LRLRLR'));
