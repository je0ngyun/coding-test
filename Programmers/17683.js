'use strict';

let musicInfo = [-Infinity, '(None)'];

const trans = (m) => {
  return m.replace(/.#/g, (match, offset, origin) => {
    return origin[offset].toLowerCase();
  });
};

const getRealPlay = (m, iter, rest) => {
  let ret = '';
  for (let i = 0; i < iter; i++) {
    ret += m;
  }
  return ret + m.substr(0, rest);
};

const solution = (mu, musicinfos) => {
  mu = trans(mu);
  const result = musicinfos.forEach((music) => {
    const [s, e, n, m] = music.split(',');
    const rm = trans(m);
    const ss = s.split(':');
    const ee = e.split(':');
    const playTime = ee[0] * 60 + Number(ee[1]) - (ss[0] * 60 + Number(ss[1]));
    const RealPlay = getRealPlay(
      rm,
      Math.floor(playTime / rm.length),
      playTime % rm.length,
    );
    if ((RealPlay.match(new RegExp(mu)) || []).length) {
      if (musicInfo[0] < playTime) {
        musicInfo = [playTime, n];
      }
    }
  });
  return musicInfo[1];
};

console.log(
  solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']),
);
