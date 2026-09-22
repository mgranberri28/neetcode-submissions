class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

        const map = {
            ")": "(",
            "}": "{",
            "]": "["
        };

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "{" || s[i] === "(" || s[i] === "[") {
                stack.push(s[i])
            } else{
                if(map[s[i]] !== stack[stack.length -1]) {
                    return false;
                }
                stack.pop();
            }
        };

        return stack.length === 0
    }
}
