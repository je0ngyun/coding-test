String.prototype.spl = function () {
  return this.split('')
    .map((v, i, a) => (v + a[i + 1]).toLowerCase())
    .slice(0, this.length - 1)
    .filter((vv) => /^[a-z]+$/g.test(vv));
};

Array.prototype.intersec = function (x) {
  let ret = [];
  this.forEach((v) => {
    if (x.includes(v)) {
      if (!ret.includes(v)) {
        const a = this.filter((f) => f === v).length;
        const b = x.filter((f) => f === v).length;
        const iter = a < b ? a : b;
        for (let i = 0; i < iter; i++) {
          ret.push(v);
        }
      }
    }
  });
  return ret;
};

Array.prototype.union = function (x) {
  let ret = [];
  this.forEach((v) => {
    if (!ret.includes(v)) {
      const a = this.filter((f) => f === v).length;
      const b = x.filter((f) => f === v).length;
      const iter = a < b ? b : a;
      for (let i = 0; i < iter; i++) {
        ret.push(v);
      }
    }
  });
  ret.push(...x.filter((f) => !ret.includes(f)));
  return ret;
};

const solution = function (str1, str2) {
  str1 = str1.spl();
  str2 = str2.spl();
  const intersec = str1.intersec(str2);
  const union = str1.union(str2);
  if (intersec.length === 0 && union.length === 0) {
    return 65536;
  }
  return Math.floor((intersec.length / union.length) * 65536);
};

console.log(solution('handshake', 'shake hands'));

// let a = 'shake hands';
// // console.log(/^[a-z]+$/g.test('e '));
// console.log(a.spl());
