/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        if (!intervals || intervals.length < 1) return 0

        const starts = intervals.map(intervals => intervals.start).sort((a, b) => a - b);
        const ends = intervals.map(intervals => intervals.end).sort((a, b) => a - b);

        let rooms = 0;
        let end = 0;

        for (let i = 0; i < intervals.length; i++) {
            if(starts[i] < ends[end]) {
                rooms++;
            } else {
                end++;
            }
        }

        return rooms
    }
}
