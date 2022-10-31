/*
Given an integer, convert it to a roman numeral.
*/

var intToRoman = function (num) {
  let letters = [];
  while (num > 0) {
    if (num >= 1000) {
      letters.push('M');
      num -= 1000;
    } else if (num >= 900) {
      letters.push('CM');
      num -= 900;
    } else if (num >= 500) {
      letters.push('D');
      num -= 500;
    } else if (num >= 400) {
      letters.push('CD');
      num -= 400;
    } else if (num >= 100) {
      letters.push('C');
      num -= 100;
    } else if (num >= 90) {
      letters.push('XC');
      num -= 90;
    } else if (num >= 50) {
      letters.push('L');
      num -= 50;
    } else if (num >= 40) {
      letters.push('XL');
      num -= 40;
    } else if (num >= 10) {
      letters.push('X');
      num -= 10;
    } else if (num >= 9) {
      letters.push('IX');
      num -= 9;
    } else if (num >= 5) {
      letters.push('V');
      num -= 5;
    } else if (num >= 4) {
      letters.push('IV');
      num -= 4;
    } else if (num >= 1) {
      letters.push('I');
      num -= 1;
    }
  }
  return letters.join('');
};

console.log(intToRoman(1994));

// Accepted! Runtime: 232 ms
