var longestCommonPrefix = function (strs) {
  let prefixs = [];
  if (strs[0].length === 0) return '';
  if (strs.length === 1) return strs[0];
  for (let i = 0; i < strs[0].length; i++) {
    let letters = [];
    for (let j = 0; j < strs.length; j++) {
      letters.push(strs[j][i]);
    }
    if (letters.every((x) => x === letters[0])) {
      prefixs.push(letters[0]);
    } else {
      console.log(prefixs.join(''));
      return prefixs.join('');
    }
  }
  return prefixs.join('');
};

longestCommonPrefix(['flower', 'flow', 'flight']);

// Accepted! Runtime 66 ms
