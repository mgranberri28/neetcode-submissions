class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const chars = {
            "{": "}",
            "[": "]",
            "(": ")"
        };

        const stack = [];
        for(let char of s) {
            if(chars[char]){
                stack.push(chars[char])
            } else if (stack.pop() !== char) {
                return false
            }
        }
        
        return true;
        
    }
}
