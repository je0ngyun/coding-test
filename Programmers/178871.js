'use strict';

const solution = (players, callings) => {
  const playerMap = {};
  const rankMap = {};
  const ret = [];

  for (let i = 0; i < players.length; i++) {
    playerMap[players[i]] = i + 1;
    rankMap[i + 1] = players[i];
  }

  for (const call of callings) {
    const curRank = playerMap[call];
    playerMap[call] = curRank - 1;
    const frontPlayerName = rankMap[curRank - 1];
    playerMap[frontPlayerName] = curRank;
    rankMap[curRank] = frontPlayerName;
    rankMap[curRank - 1] = call;
  }

  for (const [name, rank] of Object.entries(playerMap)) {
    ret[rank - 1] = name;
  }

  return ret;
};

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine'],
  ),
);
