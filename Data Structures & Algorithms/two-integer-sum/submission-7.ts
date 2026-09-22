class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // create a map to store seen numbers and their indeces
        // iterate through nums
        // create a number to store the difference between target - current el
        // check if map contains the diff variable 
        // if so return both their indeces
        // store current num and its index in map

        const seen = new Map<number, number> ();

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i];

            if(seen.has(diff)) {
                return [seen.get(diff)!, i];
            }

            seen.set(nums[i], i);
        }
    }
}
