class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        // create two pointer one for the beg of string
        // second pointer will be the end of string
        // iterater through string while left is less than right
        // check if current l char is a valid char
        // if not move to the right
        // check if current char at r index is valid char
        // if not move left
        // check if l char equal right char
        // if not return false
        // incremnet left char, decrement right char
        // return true outside of func

        let l = 0,
            r = s.length - 1;
        while (l < r) {
            if (!/^[a-zA-Z0-9]$/.test(s[l])) {
                l++;
            }

            if (!/^[a-zA-Z0-9]$/.test(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

            l++;
            r--;
        }

        return true;
    }
}
