'use strict';

let dic;

const getFitStr = (sidx, msg, len) => {
  let ret = '';
  for (let i = sidx; i < len; i++) {
    ret += msg[i];
    if (!dic.has(ret + msg[i + 1])) break;
  }
  return [ret, msg.substr(sidx, ret.length + 1)];
};

const solution = (msg) => {
  let dicIdx = 27;
  const answer = [];
  let i = 0;
  const len = msg.length;
  const base = [...Array(26)].map((_, i) => [
    String.fromCharCode(65 + i),
    i + 1,
  ]);
  dic = new Map(base);
  while (i < len) {
    const [word, compos] = getFitStr(i, msg, len);
    answer.push(dic.get(word));
    if (!dic.has(compos)) {
      dic.set(compos, dicIdx);
      dicIdx++;
    }
    i += word.length;
  }
  return answer;
};

console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
