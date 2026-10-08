class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const set = new Set();

        for ( let i = 0; i < nums.length; i++) {
            set.add(nums[i]);
        }


        for (let i = 0; i <= nums.length; i++) {
            if (!set.has(i)) {
                return i
            }
        }

        return 0;
    }
}
