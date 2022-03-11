export {};

type Result = {
  [key: string]: number;
};

const solution = (fees: number[], records: string[]): number[] => {
  const result: Result = {};

  const spled = records.map((r) => r.split(' '));
  const cars = new Set();
  spled.forEach((s) => cars.add(s[1]));
  cars.forEach((c) => (result[c as string] = 0));

  cars.forEach((car) => {
    const cnt = spled.filter((f) => car === f[1]).length;
    if (cnt % 2 === 1) {
      spled.push([`23:59`, car as string, `OUT`]);
    }
  });

  const computed = spled.map((s) => {
    const [h, m] = s[0].split(':');
    return [Number(h) * 60 + Number(m), s[1], s[2]];
  });

  computed.sort((a, b) => {
    if (+a[1] > +b[1]) return 1;
    if (+a[1] < +b[1]) return -1;
    if (a[0] < b[0]) return -1;
    return 1;
  });

  for (let i = 1; i < computed.length; i += 2) {
    const a = computed[i][0] as number;
    const b = computed[i - 1][0] as number;
    result[computed[i][1]] += a - b;
  }

  const a = Object.entries(result)
    .sort((a, b) => (+a[0] > +b[0] ? 1 : -1))
    .map((rr) => {
      const 누적시간 = +rr[1];
      const 기본시간 = fees[0];
      const 기본요금 = fees[1];
      const 단위시간 = fees[2];
      const 단위요금 = fees[3];

      if (누적시간 <= 기본시간) {
        return 기본요금;
      }
      return 기본요금 + Math.ceil((누적시간 - 기본시간) / 단위시간) * 단위요금;
    });
  return a;
};

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      '05:34 5961 IN',
      '06:00 0000 IN',
      '06:34 0000 OUT',
      '07:59 5961 OUT',
      '07:59 0148 IN',
      '18:59 0000 IN',
      '19:09 0148 OUT',
      '22:59 5961 IN',
      '23:00 5961 OUT',
    ],
  ),
);
