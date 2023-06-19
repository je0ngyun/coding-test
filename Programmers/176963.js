'use strict';

function solution(name, yearning, photo) {
  const scoreMap = name.reduce((acc, cur, idx) => {
    return { ...acc, [cur]: yearning[idx] };
  }, {});

  const calcScore = (nameArr) =>
    nameArr.reduce((acc, cur) => acc + (scoreMap[cur] ? scoreMap[cur] : 0), 0);

  return photo.map(calcScore);
}

console.log(
  solution(
    ['may', 'kein', 'kain', 'radi'],
    [5, 10, 1, 3],
    [
      ['may', 'kein', 'kain', 'radi'],
      ['may', 'kein', 'brin', 'deny'],
      ['kon', 'kain', 'may', 'coni'],
    ],
  ),
);
