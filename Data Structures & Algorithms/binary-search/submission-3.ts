class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // create a value to store 3 pointers l, m and r
        // iterate while l is less than or equal to right
        // set the m variale to the index at the middle of the array
        // if target is equal to element at the middle index return the index
        // if target is greater than number at the middle index
            // set l to middle index plus one
            // else set r to m mins one
        // return negative one outside the function

        let l = 0, r = nums.length - 1, m;

        while (l <= r) {
            m = Math.floor((l + r)/2);

            if (target === nums[m]){
                return m;
            }

            if (target > nums[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return -1
    }

    // O (logn)
    // O(1)
}
