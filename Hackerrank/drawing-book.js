'use strict';

function pageCount(n, p) {
  if (p === 1) return 0;
  const allBlockCnt = Math.floor(n / 2) + 1;
  let cnt = 1;
  for (let i = 2; i <= n; i += 2) {
    if (p === i || p === i + 1) break;
    cnt++;
  }
  return Math.min(cnt, allBlockCnt - cnt - 1);
}
