class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanedString = s.replace(/[^a-z0-9]/gi, '');

        return cleanedString.toLowerCase() === cleanedString.toLowerCase().split("").reverse().join("");
    }
}
