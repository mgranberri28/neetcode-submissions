class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
      const chars: Record<string, number> = {};

      if(s.length !== t.length) return false;

      for (let i = 0; i < s.length; i++) {
        chars[s[i]] = (chars[s[i]] || 0) + 1;
        chars[t[i]] = (chars[t[i]] || 0) - 1;
      }

      return Object.values(chars).every(count => count === 0);
    }
}
