/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
hasCycle(head: ListNode | null ): boolean {
  //create two variables, one fast and one slow
  // set both equal to head
  // iterate while fast and fast.nnext are true
  // set slow to the next varible
  //set fast to the next two variables
  // return true if fast is equal to slow
  // return false outside the loop


  let fast = head, slow = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow = fast) {
      return true;
    }
  }

  return false;
}
// O(n) time because fast only hits each node once before it runs into slow
// O(1) because we're not using any extra data structres
}
