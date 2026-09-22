class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // create a set to store seen numbers;
        // iterate through nums
        // check if current element is inside set
        // if so return true
        // add number to set
        // return false outside loop

        const seen: Set<number> = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) return true;

            seen.add(nums[i]);
        }

        return false;
    }
}
