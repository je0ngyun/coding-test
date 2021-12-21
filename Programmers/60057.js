function solution(s) {
  const maximum = s.length / 2 + 1;
  let result = [];
  for (let i = 1; i < maximum; i++) {
    let splitArr = [];
    let resultStr = '';
    let cnt = 1;
    for (let j = 0; j < s.length; j += i) {
      splitArr.push(s.substr(j, i));
    }
    splitArr.push('#');
    for (let k = 1; k < splitArr.length; k++) {
      if (splitArr[k] == splitArr[k - 1]) {
        cnt += 1;
      } else if (splitArr[k] != splitArr[k - 1]) {
        if (cnt > 1) {
          resultStr += `${cnt}${splitArr[k - 1]}`;
        } else {
          resultStr += splitArr[k - 1];
        }
        cnt = 1;
      }
    }
    result.push(resultStr);
  }

  return Math.min(...result.map((v) => v.length));
}
