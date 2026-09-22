class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
      let l = 0, m, r = nums.length - 1;

      while (l <= r) {
        m = Math.floor((l+r)/2);

        if (target === nums[m]) return m

        if(target > nums[m]) {
          l++
        } else {
          r--
        }
      }

      return -1
    }
}
