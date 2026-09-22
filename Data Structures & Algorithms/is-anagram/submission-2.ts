class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // build a map to store letter count
        // iterate through string one
        // add each character to map and it's quantity
        // iterate through string two
        // return false if that character is not in the map
        // deduct the count if the character is in the map
        if (s.length !== t.length) return false;
        
        const chars: Record <string, number> = {};
        for (let i = 0; i < s.length; i++) {
            chars[s[i]] = (chars[s[i]] || 0) + 1;
            chars[t[i]] = (chars[t[i]] || 0) - 1;
        }
        
        return Object.values(chars).every(count => count === 0)
    }
}
