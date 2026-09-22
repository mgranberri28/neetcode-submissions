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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        // create a temp var to store previous and set it to null
        // iterate while head is true
        // create another variable next and set it to head.next
        // move 

        let prev = null;
        while (head) {
            let next = head.next;
            head.next = prev;
            prev = next;
            next = head;
        }
    }
}
