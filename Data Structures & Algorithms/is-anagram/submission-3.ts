class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // create a record to store chars and thier count
        // iterate through first string
        // add each char to record and increase count by one
        // decrement the count for string two
        // return false if any char has a count more than 0, else return true

        const map: Record<string, number> = {};
        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++) {
            map[s[i]] = (map[s[i]] || 0) + 1;
            map[t[i]] = (map[t[i]] || 0) - 1;
        }

        return Object.values(map).every(count => count === 0)
    }
}
