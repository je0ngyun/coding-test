'use strict';

'use strict';
/**
 * Boj 1966
 */
const qn = 1966;
const filePath =
  process.platform === 'linux' ? './dev/stdin' : `./Boj/input/${qn}.stdin`;

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => Number(v)));

const TCase = input[0][0];

for (let t = 0; t < TCase * 2; t += 2) {
  const targetIdx = input[t + 1][1];
  const queue = input[t + 2].map((v, i) => [v, i]);
  const out = [];
  while (true) {
    let isAble = true;
    const [value, index] = queue.shift();
    queue.forEach(([compare, _]) => {
      if (compare > value) {
        isAble = false;
      }
    });
    if (isAble) {
      out.push(index);
      if (index === targetIdx) {
        console.log(out.length);
        break;
      }
    } else {
      queue.push([value, index]);
    }
  }
}
