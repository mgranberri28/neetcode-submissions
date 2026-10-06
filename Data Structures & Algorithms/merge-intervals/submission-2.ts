class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        //sort arrays in asc order
        // create a temp var and set it equal to the endtime of the first array
        // create a tem variable to store result;
        // iterate through array
        // check if temp end time is less than or equal to the endtime of the next array
        // if so push end times start time and the the end time of the next array
        // set new endtime as the next vars end time;
        // return result

        if (intervals.length === 1) return intervals;

        intervals.sort((a, b) => a[0] - b[0]);

        const result = [intervals[0]];

        for (let i = 0; i < intervals.length; i++) {
            const current = intervals[i];
            const lastAdded = result[result.length -1];
            if (current[0] <= lastAdded[1]) {
                lastAdded[1] = Math.max(lastAdded[1], current[1])
            } else {
                result.push(current);
            }
        }

        return result;
    }
}
