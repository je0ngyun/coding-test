'use strict';

const maxProfit = (prices) => {
  let max = -Infinity;
  const cur = [999999, prices[0]];
  for (let i = 1; i < prices.length; i++) {
    const [back2, back1] = cur;
    const price = prices[i];
    if (price - back1 > price - back2) {
      cur.shift();
      cur.push(price);
      max = Math.max(price - back1, max);
    } else {
      cur.pop();
      cur.push(price);
      max = Math.max(price - back2, max);
    }
  }
  return max <= 0 ? 0 : max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
