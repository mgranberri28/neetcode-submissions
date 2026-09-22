class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // input: array of nums, output: bool
        // create a map to store already seen number
        // iterate through nums array
        // if current element is found inside map return true
        // store the current element inside the map
        // return false outside loop

        const seen = new Set<number>();

        for (let i = 0; i < nums.length; i++) {

            if(seen.has(nums[i])) {
                return true
            }

            seen.add(nums[i]);
        }

        return false;
    }

    //O(n) worst case loop through each number
    //O(n) created a new data structure
}
