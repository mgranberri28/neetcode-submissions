class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for (let i = 0; i < strs.length; i++) {
            const sorted = strs[i].split('').sort().join('');

            if (!map[sorted]) {
                map[sorted] = [strs[i]];
            } else {
                map[sorted].push(strs[i]);
            }
        }

        return Object.values(map);
    }
}
