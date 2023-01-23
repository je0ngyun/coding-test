'use strict';

const solution = (weights) => {
  let answerdiv2 = 0;
  let answer = 0;
  const dic = {};
  for (const weight of weights) {
    dic[weight] ? dic[weight]++ : (dic[weight] = 1);
  }

  for (const i in dic) {
    const x2 = i * 2;
    if (x2 % 3 == 0) if (dic[x2 / 3]) answerdiv2 += dic[i] * dic[x2 / 3];
    if (x2 % 4 == 0) if (dic[x2 / 4]) answerdiv2 += dic[i] * dic[x2 / 4];
    const x3 = i * 3;
    if (x3 % 2 == 0) if (dic[x3 / 2]) answerdiv2 += dic[i] * dic[x3 / 2];
    if (x3 % 4 == 0) if (dic[x3 / 4]) answerdiv2 += dic[i] * dic[x3 / 4];
    const x4 = i * 4;
    if (x4 % 2 == 0) if (dic[x4 / 2]) answerdiv2 += dic[i] * dic[x4 / 2];
    if (x4 % 3 == 0) if (dic[x4 / 3]) answerdiv2 += dic[i] * dic[x4 / 3];
    answer += (dic[i] * (dic[i] - 1)) / 2;
  }

  answer += answerdiv2 / 2;

  return answer;
};

console.log(solution([100, 180, 360, 100, 270])); //4
