'use strict';

const solution = (n) => {
  const bin = n.toString(2);
  const len = bin.length;
  const originIdx = bin.lastIndexOf('1');
  const next = parseInt(bin.slice(0, bin.lastIndexOf('1') + 1), 2) + 1;
  const idx = next.toString(2).lastIndexOf('1');
  const head = next.toString(2).slice(0, idx + 1);
  const pad = len - idx - 1;
  const restOne = originIdx - idx - 1;
  const ceil = !!!idx ? 1 : 0;

  return parseInt(
    head
      .padEnd(head.length + pad - restOne, '0')
      .padEnd(head.length + pad - restOne + restOne + ceil, '1'),
    2,
  );
};

console.log(solution(15));
10111;
