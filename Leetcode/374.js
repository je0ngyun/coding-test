'use strict';

const guess = (n) => {
  if (n === 3) return GUESS_TYPE.FIT;
  if (n < 3) return GUESS_TYPE.OVER;
  return GUESS_TYPE.UNDER;
};

const GUESS_TYPE = {
  OVER: 1,
  UNDER: -1,
};

const guessNumber = function (n) {
  let left = 1;
  let right = n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (guess(mid) === GUESS_TYPE.UNDER) right = mid - 1;
    else if (guess(mid) === GUESS_TYPE.OVER) left = mid + 1;
    else return mid;
  }
};

console.log(guessNumber(3));
