class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
     hasDuplicate(nums){
        //store nums array in set
        //return set size less than the length of nums
        const uniqueSet = new Set(nums);
        return uniqueSet.size < nums.length;
    }
}
