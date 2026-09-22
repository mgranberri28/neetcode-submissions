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
        // three steps
        // 1. Save next - next = head.next
        // 2. flip the arrow - head.next = prev
        // 3. walk forward - prev/head = head & next repectively

        let prev = null;
        while (head) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }

        return prev;
    }
}
