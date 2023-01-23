'use strict';

const solution = (cap, _, deliveries, pickups) => {
  let answer = 0;

  while (deliveries.length || pickups.length) {
    if (!deliveries[deliveries.length - 1]) deliveries.pop();
    if (!pickups[pickups.length - 1]) pickups.pop();

    answer += 2 * Math.max(deliveries.length, pickups.length);

    let can_del = cap;
    for (let i = deliveries.length - 1; i >= 0; i--) {
      if (can_del < deliveries[i]) {
        deliveries[i] -= can_del;
        break;
      } else {
        can_del -= deliveries[i];
        deliveries.pop();
      }
    }

    let can_pku = cap;
    for (let i = pickups.length - 1; i >= 0; i--) {
      if (can_pku < pickups[i]) {
        pickups[i] -= can_pku;
        break;
      } else {
        can_pku -= pickups[i];
        pickups.pop();
      }
    }
  }

  return answer;
};

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])); //16
