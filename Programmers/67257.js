const insert = function (strArr, opeartion) {
  //우선순위에 따라 괄호 삽입
  opeartion.forEach((o) => {
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === o) {
        const newStr = `(${strArr[i - 1]}${o}${strArr[i + 1]})`;
        strArr.splice(i - 1, 3, newStr);
        i = i - 1;
      }
    }
  });
  return strArr;
};

function solution(expression) {
  let allCase = [
    ['-', '*', '+'],
    ['-', '+', '*'],
    ['*', '-', '+'],
    ['*', '+', '-'],
    ['+', '-', '*'],
    ['+', '*', '-'],
  ];
  allCase = allCase
    .map((c) => {
      return eval(insert(expression.match(/\d+|\W/g), c)[0]);
    })
    .map((v) => Math.abs(v));

  return Math.max(...allCase);
}

console.log(solution('100-200*300-500+20'));
