class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // create a record to store num and its index
        // iterate through nums array
        // create a diff variable and set it to target - current num
        // if record has diff return current index and index of diff

        const seen = new Map<number, number>();

        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if(seen.has(diff)){
                return [seen.get(diff), i];
            }

            seen.set(nums[i], i);
        }
    }
}
