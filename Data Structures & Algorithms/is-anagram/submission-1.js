class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram (s, t){
        // check if s backwards is equal to t
        // if so return true
        // esle return false
        return s.split("").sort().join("") === t.split("").sort().join("");

    };

}
