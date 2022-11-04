/* 
https://leetcode.com/problems/ransom-note/

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

@param {string} ransomNote
@param {string} magazine
@return {boolean}
*/

var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    let position = magazine.indexOf(ransomNote[i]);
    if (position === -1) {
      return false;
    } else {
      magazine = magazine.slice(0, position) + magazine.slice(position + 1);
    }
  }
  return true;
};

console.log(canConstruct('aa', 'aab'));

// Accepted! Runtime 78ms.
