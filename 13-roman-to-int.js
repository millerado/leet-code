/*
https://leetcode.com/problems/roman-to-integer/
Given a roman numeral, convert it to an integer.
Constraints:
1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
@param {string} s
@return {number}
*/

var romanToInt = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'M') {
      count += 1000;
    } else if (s[i] === 'D') {
      count += 500;
    } else if (s[i] === 'C') {
      if (s[i + 1] === 'M' || s[i + 1] === 'D') {
        count -= 100;
      } else {
        count += 100;
      }
    } else if (s[i] === 'L') {
      count += 50;
    } else if (s[i] === 'X') {
      if (s[i + 1] === 'L' || s[i + 1] === 'C') {
        count -= 10;
      } else {
        count += 10;
      }
    } else if (s[i] === 'V') {
      count += 5;
    } else if (s[i] === 'I') {
      if (s[i + 1] === 'X' || s[i + 1] === 'V') {
        count -= 1;
      } else {
        count += 1;
      }
    }
  }
  return count;
};

console.log(romanToInt('MCMXCIV'));

// Accepted! Runtime 245ms
