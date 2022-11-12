const removeDuplicates = (nums) => {
  let refIdx = 0;
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  for (let i = min; i <= max; i++) {
    if (nums.includes(i)) nums[refIdx++] = i;
  }
  return refIdx;
};

console.log(removeDuplicates([0, 0, 0, 0, 3]));
