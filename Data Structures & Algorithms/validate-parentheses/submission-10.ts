class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
      const chars: Record<string, string> = {
        "{": "}",
        "[": "]",
        "(": ")",
      };

      const stack = [];
      for (let i = 0; i < s.length; i ++) {
        if(chars[s[i]]) {
          stack.push(s[i]);
        }else if(chars[stack.pop()!] !== s[i]) {
          return false
        }
      }

      return stack.length == 0;
    }
}
