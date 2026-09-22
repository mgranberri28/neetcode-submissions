class Solution {
    /**
     * @param {number[]}
     * @return {number[][]}
     */
    threeSum(nums) {
        // create a record to store result
        const result = [];
        // sort ascending so we can use two pointers and skip duplicates easily
        nums.sort((a, b) => a - b);

        // fix one number at index i, then search for two others to its right
        // stop at length - 2 because we still need l and r after i
        for (let i = 0; i < nums.length - 2; i++) {
            // if nums[i] is the same as the previous i, we'd produce duplicate triplets — skip
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // left pointer starts just after i
            let l = i + 1;
            // right pointer starts at the end of the array
            let r = nums.length - 1;

            // move pointers toward each other until they meet
            while (l < r) {
                // sum of the three candidate numbers
                const sum = nums[i] + nums[l] + nums[r];
                if (sum === 0) {
                    // found a valid triplet — record it
                    result.push([nums[i], nums[l], nums[r]]);
                    // advance both pointers to look for the next distinct triplet
                    l++;
                    r--;
                    // skip any duplicates of the value we just used at l
                    while (l < r && nums[l] === nums[l - 1]) l++;
                    // skip any duplicates of the value we just used at r
                    while (l < r && nums[r] === nums[r + 1]) r--;
                } else if (sum < 0) {
                    // sum too small — need a larger number, so move left pointer up
                    l++;
                } else {
                    // sum too large — need a smaller number, so move right pointer down
                    r--;
                }
            }
        }
        // every valid, unique triplet that sums to 0
        return result;
    }
}