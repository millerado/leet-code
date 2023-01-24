/* 
Given an array of integers (nums) and an integer (target), return indices of the two number such 
as they add up to (target).
*/

var twoSum = function (nums, target) {
  const numsIdx = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i < j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

twoSum([3, 2, 4], 6);

// Accepted! Runtime 150 ms
