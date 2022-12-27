'use strict';

const canJump = (nums) => {
  let jump = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 && jump >= 0) return true;
    if (jump < nums[i]) {
      jump = nums[i];
    }
    if (jump === 0) {
      jump = nums[i];
    }
    if (jump <= 0) return false;
    jump--;
  }
  return false;
};

console.log(canJump([1, 0, 1, 0]));
