/* 
Given a string s, find th elength of the longest substring without repeating characters
*/

var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let substring = [];
  let maxlength = 1;
  for (let i = 0; i < s.length; i++) {
    substring.push(s[i]);
    for (let j = i + 1; j < s.length; j++) {
      if (substring.includes(s[j])) {
        substring = [];
        break;
      } else {
        substring.push(s[j]);
        if (substring.length > maxlength) maxlength = substring.length;
      }
    }
    substring = [];
  }
  return maxlength;
};

lengthOfLongestSubstring('bbbb');

// Accepted! Runtime 887 ms (VERY SLOW!)
