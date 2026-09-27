class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums: number[]): number {
        let result: number = 0;

        for (let i = 0; i < nums.length; i++) {
            result ^= nums[i];
        }

        return result;
    }
}
