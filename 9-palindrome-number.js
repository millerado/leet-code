/*
Given an integer x, return true if x is a plaindrome, and false otherwise.
*/

var isPalindrome = function (x) {
  const digits = x.toString().split('');
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== digits[digits.length - i - 1]) {
      return false;
    }
  }
  return true;
};

isPalindrome(-121);

// Accepted! Runtime 289 ms
