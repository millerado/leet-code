/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.
*/

/*
var singleNonDuplicate = function (nums) {
  let stack = [];
  if (nums.length === 1) return nums[0];
  for (let i = 0; i < nums.length; i++) {
    stack.push(nums[i]);
    if (stack.length === 2 && stack[0] !== stack[1]) {
      return stack[0];
    } else if (stack.length === 2) {
      stack = [];
    }
  }
  if (stack.length === 1) return stack[0];
};
*/

// Accepted! Runtime 123ms (Very Slow!)

// Better Version
var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
  return nums[nums.length - 1];
};
singleNonDuplicate([1, 1, 2]);

// Accepted! Runtime 76 ms.
