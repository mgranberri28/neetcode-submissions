class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // create a set to store numbers you already seen
        // iterate through nums array
        // return true if current element is stored in set
        // add current element to map
        // return false outside loop
        const seen = new Set <number>();
        
        for (let i = 0; i < nums.length; i++) {

            if (seen.has(nums[i])) {

                return true;
            }

            seen.add(nums[i])
        }

        return false;
    }
}
