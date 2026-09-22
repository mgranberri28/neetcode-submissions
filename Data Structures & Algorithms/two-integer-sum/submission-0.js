class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // loop through the numbers array
        // create a nested loop inside the first loop
        // check if the element in the outer loop 
        // plus the element in the inner loop at the index of the outer loop plus one 
        // is equal to the target
        // if so return those indeces in an array

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j+1] === target) return [i, j+1];
            }
        }

        return []
    }
}
