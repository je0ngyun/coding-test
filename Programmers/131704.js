'use strict';

const subBelt = [];

const isSubBeltHas = (boxNum) => {
  return subBelt[subBelt.length - 1] === boxNum;
};

const solution = (order) => {
  let boxNum = 1;
  let orderBoxIndex = 0;
  let cnt = 0;

  while (boxNum <= order.length) {
    if (isSubBeltHas(order[orderBoxIndex])) {
      subBelt.pop();
      orderBoxIndex++;
      cnt++;
      continue;
    }
    if (boxNum === order[orderBoxIndex]) {
      boxNum++;
      orderBoxIndex++;
      cnt++;
    } else {
      subBelt.push(boxNum);
      boxNum++;
    }
  }
  while (subBelt.length > 0) {
    if (isSubBeltHas(order[orderBoxIndex])) {
      subBelt.pop();
      orderBoxIndex++;
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
};

console.log(solution([2, 1, 4, 3, 6, 5, 8, 7, 10, 9]));
