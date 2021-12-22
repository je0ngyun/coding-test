'use strict';

// 실시간으로 바꿔줄 필요는 없다

function solution(record) {
  let current = {};
  record = record.map((rec) => rec.split(' '));
  record.forEach((spl) => {
    if (spl[0] !== 'Leave') {
      current[spl[1]] = spl[2];
    }
  });
  return record
    .map((spl) => {
      if (spl[0] === 'Enter') {
        return `${current[spl[1]]}님이 들어왔습니다.`;
      }
      if (spl[0] === 'Leave') {
        return `${current[spl[1]]}님이 나갔습니다.`;
      }
      return '';
    })
    .filter((v) => v);
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ]),
);
