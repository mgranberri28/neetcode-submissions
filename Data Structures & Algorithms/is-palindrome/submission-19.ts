class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
      let l = 0, r = s.length - 1;

      if (s.length %2 !== 0) return false;

      while (l < r) {
        while(l < r && !/^[a-zA-Z0-9]$/.test(s[l])) {
          l++
        }

        while(l < r && !/^[a-zA-Z0-9]$/.test(s[r])) {
          r--
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false

        l++;
        r--;
      }

      return true;
    }
}
