class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // if input has one element return that el in a nested array
        // create a map to store strings and anagrams
        // sort the input string
        // iterate through sorted string
        // check if current element is not stored in map
        // if so add the sorted string as the key and the current element as the value in an array
        // else add current el to the array

        const map = {};
        
        for (let i = 0; i < strs.length; i++) {
            // Sort the string to create a uniform key
            const sorted = strs[i].split('').sort().join('');

            if (!map[sorted]) {
                map[sorted] = [strs[i]];
            } else {
                map[sorted].push(strs[i]);
            }
        }

        // Object.values perfectly extracts the grouped arrays
        return Object.values(map);
    }

}
