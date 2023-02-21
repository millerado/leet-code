/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/

var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    const insertIndex = nums.findIndex((num) => num > target);
    if (insertIndex === -1) {
      return nums.length;
    } else {
      return insertIndex;
    }
  }
};

searchInsert([1, 3, 5, 6], 7);

// Accepted! Runtime
