class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];

        const chars: Record<string, string> = {
            "}": "{",
            ")": "(",
            "]": "["
        };

        // if ((s.length) %2 !== 0) return false;

        for (let i = 0; i < s.length; i++) {
            if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
                stack.push(s[i])
            }else {
                if(stack[stack.length - 1] !== chars[s[i]]) {
                    return false
                }
                stack.pop();
            }
        }

        return true;
    }
}
