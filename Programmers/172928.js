function solution(park, routes) {
  const moveMap = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };

  let startPos = [];

  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === 'S') {
        startPos = [i, j];
        break;
      }
    }
  }

  for (const moveInfo of routes) {
    const [direction, weight] = moveInfo.split(' ');
    let isAble = true;
    let cx = startPos[0];
    let cy = startPos[1];
    for (let i = 0; i < weight; i++) {
      cx = cx + moveMap[direction][0];
      cy = cy + moveMap[direction][1];
      if (
        cx < 0 ||
        cx >= park.length ||
        cy < 0 ||
        cy >= park[0].length ||
        park[cx][cy] === 'X'
      ) {
        isAble = false;
        break;
      }
    }
    if (isAble) startPos = [cx, cy];
  }

  return startPos;
}

console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
