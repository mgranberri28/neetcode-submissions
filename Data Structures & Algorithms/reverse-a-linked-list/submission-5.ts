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
        //create a variable to store previous and set it to null
        // iterate while head is true
        // create a variable next and set to head.next
        // set head.next to prev
        // set prev to head
        // set head to next
        //return prev

        let prev: ListNode | null = null;

        while (head) {
            let next = head.next
            head.next = prev;
            prev = head;
            head = next;
        }

        return prev;
    }
}
