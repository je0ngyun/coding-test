'use strict';

// 0 보다 크고 n 보다 작은 수들 중 n % x 가 0인 수를 고른다
// n - x 처리한다
// 엘리스가 이긴 경우에만 true를 반환한다

// -> n이 1이 될때까지 해야한다
// -> 결과 배열이 짝수면 엘리스의 승리
// -> [3,2,1]

// [1] 1
// [2,1] 2
// [3,2,1] 3
// [4,2,1] 4
// [5,4,2,1] 5
// [6,3,2,1] 6

// 2로 안나뉘면 [자기자신,...자기자신전 배열]
// 2로 나뉘면 [자기자신,...자기자신idx/2 배열]

// 최선의 선택을 해야하기에 홀짝 판단으로 구현

const divisorGame = (n) => (n % 2 ? false : true);

console.log(divisorGame(3));