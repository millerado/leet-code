/*
https://leetcode.com/problems/palindrome-linked-list/

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
Constraints:

The number of nodes in the list is in the range [1, 10^5].
0 <= Node.val <= 9

@param {ListNode} head
@return {boolean}
*/

var isPalindrome = function (head) {
  let list = [];
  for (let i = 0; i < head.length; i++) {
    list.push(head[i]);
  }
  for (let i = 0; i < list.length / 2; i++) {
    if (list[i] !== list[list.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome([1, 2, 1]));

// Works for me, but not on Leet Code because input is a Linked List. I don't really understand what the means, but there's some issue order that you go through the list.
