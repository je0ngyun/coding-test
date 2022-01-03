'use strict';

const gcd = function (a, b) {
  return b === 0 ? a : gcd(b, a % b);
};

const solution = function (w, h) {
  const whole = w * h;
  const broken = w + h - gcd(w, h);
  return whole - broken;
};
