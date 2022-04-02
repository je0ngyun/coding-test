'use strict';

const solution = (files) => {
  files = files.map((f) => {
    const exe = /\d+/g.exec(f);
    const number = exe[0];
    const idx = exe.index;
    const head = f.slice(0, idx);
    const tail = f.slice(number.length + idx);
    return [head, number, tail];
  });

  files.sort((a, b) => {
    const [ah, an, at] = a;
    const [bh, bn, bt] = b;
    if (ah.toLowerCase() < bh.toLowerCase()) return -1;
    if (ah.toLowerCase() > bh.toLowerCase()) return 1;
    if (ah.toLowerCase() === bh.toLowerCase()) {
      if (Number(an) < Number(bn)) return -1;
      if (Number(an) > Number(bn)) return 1;
    }
  });

  return files.map((f) => f.join(''));
};

console.log(
  solution([
    'F-5 Freedom Fighter',
    'B-50 Superfortress',
    'A-10 Thunderbolt II',
    'F-14 Tomcat',
  ]),
);

/^([a-zA-Z-\. ]+)([0-9]+)(.*)$/;
