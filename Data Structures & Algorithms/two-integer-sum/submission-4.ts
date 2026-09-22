class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // input nums array, target, output nums array of indexes
        // create a map to store seen numbers and their indexes
        // iterate through nums array
        // create a varible to store the target - current element
        // check if map has diff
            // if so return the indexes
        // store current number and its index in seen map

        const seen = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {

            const diff = target - nums[i];

            if (seen.has(diff)) {
                return [seen.get(diff)!, i]
            } 

            seen.set(nums[i], i);
        }
    }
    
    // O(n) time and space
}
