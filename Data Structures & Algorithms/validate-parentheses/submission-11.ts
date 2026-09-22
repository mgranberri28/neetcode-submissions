class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
      const map: Record<string, string> = { ")": "(", "}": "{", "]": "[" };
    const stack: string[] = [];
    
    for (const char of s) {
        if (map[char]) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
    }
}
