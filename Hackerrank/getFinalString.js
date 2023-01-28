'use srtict';

function getFinalString(s) {
  while (/AWS/.test(s)) {
    s = s.replace(/AWS/, '');
  }
  return s.length ? s : -1;
}

console.log(getFinalString('AWAWSSG'));
