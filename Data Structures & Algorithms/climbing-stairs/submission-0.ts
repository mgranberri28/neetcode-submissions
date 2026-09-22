class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2) return n;

        let current = 0, prev2 = 1, prev1 = 2

        for (let i = 3; i <= n; i++) {
            current = prev2 + prev1;
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1
    }
}
