export {};
const solution = (nums: number[]): number[] => {
  return nums.map((num) => {
    if (num % 2 === 0) return num + 1;
    const max = 50;
    const arr = num.toString(2).split('');
    const att = [...Array(max - arr.length).fill('0'), ...arr];
    const tgt = att.lastIndexOf('0');
    att[tgt] = '1';
    att[tgt + 1] = '0';
    return parseInt(att.join(''), 2);
  });
};
console.log(solution([1015, 7]));
