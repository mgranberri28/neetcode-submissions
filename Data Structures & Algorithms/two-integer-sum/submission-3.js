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

        // brute force
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //     if (nums[i] + nums[j] === target) return [i, j];
        //     }
        // }
        const complements = new Map();

        for (let i = 0; i < nums.length; i++) {
            const comp = target - nums[i];

            const j = complements.get(comp);
            if (j !== undefined) return [j, i];

            complements.set(nums[i], i);
        }

        return []
    }
}
