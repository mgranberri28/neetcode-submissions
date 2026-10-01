class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
      let l = 0, r = nums.length - 1, m;

      while (l <= r) {
        m = Math.floor((l + r)/2);

        if (nums[m] === target) return m;

        if(target > nums[m]) {
          l++
        } else {
          r--
        }
      }
      return -1
    }
}
