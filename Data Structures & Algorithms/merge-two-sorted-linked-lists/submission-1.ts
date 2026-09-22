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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        // Create a fake starter node called dummy.
        // Create a pointer called tail and set it equal to dummy.
        // Loop while both list1 and list2 are not null.
        // Compare list1.val and list2.val.
        // Attach the smaller node to tail.next.
        // Move forward in the list you took the node from.
        // Move tail forward to the node you just attached.
        // Repeat steps 4 through 7 until one list becomes null.
        // Attach the rest of the non-empty list to tail.next.
        // Return dummy.next, because dummy is only a fake starter node

        const dummy: ListNode = new ListNode();
        let tail: ListNode = dummy;

        while (list1 && list2) {
            if(list1.val <= list2.val) {
                tail.next = list1;
                list1 = list1.next;
            } else {
                tail.next = list2;
                list2 = list2.next
            }

            tail = tail.next
        }

        if (list1) {
            tail.next = list1
        } else {
            tail.next = list2;
        }

        return dummy.next;
    }
}
