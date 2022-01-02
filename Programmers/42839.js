const isPrime = function (num) {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAllCase = function (i, nums, arr, allCase, n, len) {
  if (i === len) {
    allCase.push(nums);
    return;
  }
  let newArr = [...arr];
  if (n != '') {
    const idx = newArr.findIndex((v) => v === n);
    newArr.splice(idx, 1);
  }
  getAllCase(i + 1, nums + '', newArr, allCase, '', len);
  for (let n of newArr) {
    getAllCase(i + 1, nums + n, newArr, allCase, n, len);
  }
  return allCase;
};

const solution = function (numbers) {
  let allCase = [
    ...new Set(getAllCase(0, '', numbers.split(''), [], '', numbers.length)),
  ];
  allCase = allCase
    .filter((f) => f)
    .map((v) => {
      let vv = v.split('');
      const idx = vv.findIndex((v) => v != '0');
      return vv.slice(idx).join('');
    });
  allCase = [...new Set(allCase)];
  return allCase.filter((f) => isPrime(f)).length;
};

console.log(solution('17'));
