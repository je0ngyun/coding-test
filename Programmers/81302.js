'use strict';

const inspect = function (place) {
  const move = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  if (!place.join('').match(/P/g)) {
    return 1;
  }
  for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5; k++) {
      if (place[i][k] == 'O') {
        let cnt = 0;
        for (let j = 0; j < 4; j++) {
          let nx = i + move[j][0];
          let ny = k + move[j][1];
          if (nx < 5 && ny < 5 && nx > -1 && ny > -1) {
            if (place[nx][ny] == 'P') {
              cnt += 1;
            }
          }
        }
        if (cnt > 1) {
          return 0;
        }
      }
      if (place[i][k] == 'P') {
        for (let j = 0; j < 4; j++) {
          let nx = i + move[j][0];
          let ny = k + move[j][1];
          if (nx < 5 && ny < 5 && nx > -1 && ny > -1) {
            if (place[nx][ny] == 'P') {
              return 0;
            }
          }
        }
      }
    }
  }
  return 1;
};

function solution(places) {
  return places.map((place) => {
    return inspect(place);
  });
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ]),
);
