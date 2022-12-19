const rob = (nums) => {
  const memo = Array(nums.length + 2).fill(-Infinity);
  const dfs = (arr, depth = 0, acc = 0) => {
    if (acc <= memo[depth]) {
      return;
    }
    if (acc > memo[depth]) {
      memo[depth] = acc;
    }
    if (depth > arr.length - 1) {
      return;
    }
    dfs(arr, depth + 2, acc + arr[depth]);
    dfs(arr, depth + 1, acc);
  };
  dfs(nums);
  return Math.max(...memo);
};

console.log(rob([1, 2, 3, 1]));
