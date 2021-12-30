'use strict';

let allcase = [];
let temp = [];
let answer = [];

const getAllCase = function (x, value, alpha) {
  if (value.length > 1) {
    temp.push(value);
  }
  if (x < alpha.length) {
    getAllCase(x + 1, value + alpha[x], alpha);
    getAllCase(x + 1, value + '', alpha);
  } else {
    return;
  }
};

function solution(orders, course) {
  orders = orders.map((v) => v.split('').sort().join(''));

  for (let order of orders) {
    getAllCase(0, '', order);
    allcase.push(...temp);
    temp = [];
  }

  allcase = [...new Set(allcase)].filter((v) => course.includes(v.length));

  allcase = allcase
    .map((v) => {
      let cnt = 0;
      for (let order of orders) {
        if ((order.match(new RegExp(`[${v}]`, 'g')) || []).length == v.length) {
          cnt += 1;
          console.log(v);
        }
      }
      return [v, cnt];
    })
    .filter((v) => v[1] > 1);

  const max = course
    .map((c) => {
      return Math.max(
        ...allcase.filter((v) => v[0].length === c).map((v) => v[1]),
      );
    })
    .filter((v) => v > 1);

  allcase.forEach((v) => {
    const len = v[0].length;
    const idx = course.indexOf(len);
    if (v[1] === max[idx]) {
      answer.push(v[0]);
    }
  });

  return answer.map((v) => v.split('').sort().join('')).sort();
}

console.log(
  solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]),
);
