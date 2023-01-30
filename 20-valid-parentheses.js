/*
Given a string s containing just the characters ( ) { } [ ], determine if the input string is valid.
An input is valid if:
Open brackets must be closed by the same type of brackets
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

var isValid = function (s) {
  const brackets = '[]{}()';
  const stack = [];
  // iterate through input
  for (let bracket of s) {
    // if the current element is an opening bracket
    const bracketIndex = brackets.indexOf(bracket);
    if (bracketIndex % 2 === 0) {
      //record the correct closeing bracket in the stack
      stack.push(bracketIndex + 1);
      // if the current element is a closing bracket,
    } else {
      // check the record to make sure it is the correct closing bracket
      if (stack.pop() !== bracketIndex) {
        // if it is the wrong closeing bracket
        return false;
      }
    }
    // if all the opening and closing brackets are matched and in the correct order return true
  }
  return stack.length === 0;
};

isValid('(]');

// Accepted! Runtime 74 ms
