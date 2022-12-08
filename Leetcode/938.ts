'use strict';

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const rangeSumBST = (
  root: TreeNode | null,
  low: number,
  high: number,
): number => {
  if (!root) return 0;
  let sum = 0;
  const queue: TreeNode[] = [root];
  while (queue.length) {
    const currentNode = queue.shift();
    const value = currentNode?.val;
    if (value && value >= low && value <= high) {
      sum += value;
    }
    currentNode?.left && queue.push(currentNode.left);
    currentNode?.right && queue.push(currentNode.right);
  }
  return sum;
};
