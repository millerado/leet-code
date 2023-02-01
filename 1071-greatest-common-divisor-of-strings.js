/* 
For two strings s and t, we say "t divides s" iff s = t + ... + t
i.e., t is concatenated with itself one or more times.)

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

var gcdOfStrings = function (str1, str2) {
  let output = '';
  for (let i = 1; i < str1.length + 1; i++) {
    let section = str1.slice(0, i);
    if (
      str1.length % section.length === 0 &&
      str2.length % section.length === 0
    ) {
      if (
        str1 === section.repeat(str1.length / section.length) &&
        str2 === section.repeat(str2.length / section.length)
      ) {
        output = section;
      }
    }
  }
  console.log(output);
  return output;
};

gcdOfStrings('ABABABAB', 'ABAB');

// Accepted! Runtime 80 ms
