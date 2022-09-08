'use strict';

const solution = (dartResult) => {
  const record = {};
  const dataSet = dartResult
    .match(/\d[SDT][\*\#]|\d\d[SDT]|\d[SDT]/g)
    .map((v) => {
      const spl = v.split('');
      if (spl[0] === '1' && spl[1] === '0') {
        return ['10', ...spl.slice(2)];
      }
      return spl;
    });

  dataSet.forEach(([score, type, option], dataSetIdx) => {
    record[dataSetIdx] = { score };
    switch (type) {
      case 'S':
        record[dataSetIdx] = {
          ...record[dataSetIdx],
          type: 1,
          multi: 1,
          minus: 1,
        };
        break;
      case 'D':
        record[dataSetIdx] = {
          ...record[dataSetIdx],
          type: 2,
          multi: 1,
          minus: 1,
        };
        break;
      default:
        record[dataSetIdx] = {
          ...record[dataSetIdx],
          type: 3,
          multi: 1,
          minus: 1,
        };
    }
    if (option) {
      switch (option) {
        case '*':
          record[dataSetIdx] = {
            ...record[dataSetIdx],
            multi: record[dataSetIdx].multi * 2,
          };
          if (record[dataSetIdx - 1]) {
            record[dataSetIdx - 1] = {
              ...record[dataSetIdx - 1],
              multi: record[dataSetIdx - 1].multi * 2,
            };
          }
          break;
        case '#':
          record[dataSetIdx] = {
            ...record[dataSetIdx],
            minus: -1,
          };
          break;
      }
    }
  });

  return Object.entries(record)
    .map(([_, { score, type, multi, minus }]) => {
      return score ** type * multi * minus;
    })
    .reduce((a, b) => a + b);
};

console.log(solution('1D2S#10S'));
