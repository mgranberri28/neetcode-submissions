class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
       if (intervals.length === 0) return [];

       const sorted = intervals.sort((a, b) => a[0] - b[0]);

       const merged = [[...sorted[0]]];

       for (let i = 1; i < sorted.length; i++) {
        const last = merged[merged.length -1];
        const current = sorted[i];

        if (current[0] <= last[1]) {
            last[1] = Math.max(last[1], current[1])
        } else {
            merged.push([...current])
        }
       }
        return merged;
    }
}
