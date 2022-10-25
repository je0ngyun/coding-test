'use strict';

const containsNearbyDuplicate = (nums, k) => {
  let isPossible = false;
  const memo = new Map();

  for (let i = 0; i < nums.length; i++) {
    const refIdx = nums[i];
    const tgt = memo.get(refIdx);

    // 해당 index의 기록된 값이 있을 경우.
    if (memo.has(refIdx)) {
      // index 기록시 앞의 값을 빼나가면서 기록한다.
      if (tgt.indices.length === 2) {
        tgt.indices.shift();
        tgt.indices.push(i);
      } else {
        tgt.indices.push(i);
      }
    } else {
      // 기록된 값이 없을 경우 초기화 해준다.
      memo.set(refIdx, { indices: [i] });
    }
    // 문제의 조건 nums[i] == nums[j] && abs(i - j) <= k 에 맞는경우 탈출시킨다.
    if (
      tgt?.indices.reduce((a, b) => Math.abs(a - b)) <= k &&
      tgt?.indices.length === 2
    ) {
      isPossible = true;
      break;
    }
  }
  return isPossible;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

// const containsNearbyDuplicate = (nums, k) => {
//     let isPossible = false;
//     const memo = new Map();
//     for (let i = 0; i < nums.length; i++) {
//       const refIdx = nums[i];
//       if (memo.has(refIdx)) {
//         memo.get(refIdx).value += i;
//         if (memo.get(refIdx).indices.length === 2) {
//           memo.get(refIdx).indices.shift();
//           memo.get(refIdx).indices.push(i);
//         } else {
//           memo.get(refIdx).indices.push(i);
//         }
//       } else {
//         memo.set(refIdx, { indices: [i], value: i });
//       }
//       if (
//         memo.get(refIdx).indices.reduce((a, b) => Math.abs(a - b)) <= k &&
//         memo.get(refIdx).indices.length === 2
//       ) {
//         isPossible = true;
//         break;
//       }
//     }
//     return isPossible;
//   };
