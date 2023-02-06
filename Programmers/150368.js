'use strict';

//가입을 하냐 안하냐, 비용이 중요함

// console.log(
//     `${i} 사용자가 자신의 기준인 ${per} 보다 높은 할인율을 가진 ${
//       selected[j] * 100
//     }퍼의 이모티콘 ${j}를 ${
//       emoticons[j] - emoticons[j] * selected[j]
//     }에 구매`,
//   );

function solution(users, emoticons) {
  const ans = [0, 0];
  const caseDfs = (depth = 0, selected = []) => {
    if (depth >= emoticons.length) {
      let subscriber = 0;
      let allPrice = 0;
      for (let i = 0; i < users.length; i++) {
        let curPrice = 0;
        const [per, price] = users[i];
        for (let j = 0; j < selected.length; j++) {
          if (per * 0.01 <= selected[j]) {
            curPrice += emoticons[j] - emoticons[j] * selected[j];
          }
        }
        //플러스가입
        if (curPrice >= price) {
          subscriber += 1;
        } //가입안함
        else {
          allPrice += curPrice;
        }
      }
      if (ans[0] < subscriber) {
        ans[0] = subscriber;
        ans[1] = allPrice;
      }
      if (ans[0] === subscriber) {
        ans[1] = Math.max(ans[1], allPrice);
      }
      return;
    }
    caseDfs(depth + 1, [...selected, 0.1]);
    caseDfs(depth + 1, [...selected, 0.2]);
    caseDfs(depth + 1, [...selected, 0.3]);
    caseDfs(depth + 1, [...selected, 0.4]);
  };
  caseDfs();

  return ans;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000],
  ),
);
