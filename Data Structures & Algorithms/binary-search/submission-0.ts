class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        // create three variables and set them to the 0, last element in the nums array
        // and the last will be the middle
        // iterate through numbers array as long as left is less than right
        // set m to half of the array
        // check if the element at m index is equal to the target number
        // if so return m
        // else if the element at m index is greater than target
        // set right pointer to m -1
        // else set l pointer to m + 1
        // return negative 1

        let l = 0;
        let r = nums.length - 1;
        let m: number;

        while (l < r) {
            m = Math.floor((l + r)/2);
            if (nums[m] === target) return m;
            else if( nums[m] > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return - 1
    }
}
