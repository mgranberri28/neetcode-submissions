/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// three steps
// 1. Save next - next = curr.next
// 2. flip the arrow - curr.next = prev
// 3. walk forward - prev/curr = curr & next repectively

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev = null;

        while(head) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }

        return prev;
    }
}
