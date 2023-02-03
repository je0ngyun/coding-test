'use strict';

function solution(n) {
  const max = Math.floor(n / 2) + 1;
  let left = 0;
  let right = 0;
  let ans = 0;

  const arr = Array.from({ length: max }, (_, idx) => idx + 1);
  let cur = arr[0];

  while (left !== arr.length - 1 || right !== arr.length - 1) {
    if (cur === n) {
      ans++;
    }
    if (cur < n) {
      cur += arr[++right];
    } else {
      cur -= arr[left++];
    }
  }
  return ans + 1;
}

console.log(solution(15));

// 4의경우 [1,2,3,4]

// l0 r0 cur1 (작음) cur += r1(2)
// l0 r1 cur3 (작음) cur += r2(3)
// l0 r2 cur6 (큼) cur -= l0(1) -> l1
// l1 r2 cur5 (큼) cur -= l1(2) -> l2
// l2 r2 cur3 (작음) cur += r3(4)
// l2 r3 cur7 (큼) cur -= l2(3) -> l3
// l3 r3 cur4 ()
