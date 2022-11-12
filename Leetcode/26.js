const removeDuplicates = (nums) => {
  let refIdx = 0;
  for (let value = nums[0]; value <= nums[nums.length - 1]; value++) {
    if (nums.includes(value)) nums[refIdx++] = value;
  }
  return refIdx;
};

console.log(removeDuplicates([0, 0, 0, 0, 3]));
