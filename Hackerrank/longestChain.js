'use strict';

function longestChain(words) {
  let maxLen = 1;
  const sortedWords = [...new Set(words)].sort((a, b) => b.length - a.length);

  const wordDic = {};
  const lengthDic = {};
  for (const word of sortedWords) {
    wordDic[word] = 1;
    lengthDic[word.length] = 1;
  }

  for (const word of sortedWords) {
    if (lengthDic[word.length.toString()]) {
      for (let i = 0; i < word.length; i++) {
        const slicedWord = word.slice(0, i) + word.slice(i + 1);
        if (wordDic[word] + 1 > wordDic[slicedWord] ?? Infinity) {
          maxLen = Math.max(maxLen, wordDic[word] + 1);
          wordDic[slicedWord] = wordDic[word] + 1;
        }
      }
    }
  }

  return maxLen;
}

console.log(longestChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca']));
