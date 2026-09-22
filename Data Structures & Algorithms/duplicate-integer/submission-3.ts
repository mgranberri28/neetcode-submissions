class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // create a set to store numbers
        // iterate through numbers array
        // return true if current number is in set
        // store number in set
        // return false outside loop

        const seen = new Set<number>();

        for (let i = 0; i < nums.length; i++) {
            if(seen.has(nums[i])) return true;

            seen.add(nums[i]);
        }

        return false  
    }
}
