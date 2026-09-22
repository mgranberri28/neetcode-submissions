class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
// input: string s, output: boolean
// if string length is odd, return false (can't pair brackets)
// build a map of openers → their matching closers
// create an empty stack to track expected closing brackets
// iterate through each character in the input string
//   if the character is an opener (exists as a key in the map),
//     push its matching closer onto the stack
//   otherwise (character is a closer),
//     pop the top of the stack and compare to the current character
//     if they don't match (or stack was empty), return false
// after the loop, return true only if the stack is empty
//   (a non-empty stack means unclosed openers remain)

        if (s.length % 2 !== 0 ) return false;

        const mappings: Record<string, string> = {
            "(": ")",
            "{": "}",
            "[": "]"
        };

        const stack: string[] = [];

        for (const char of s) {
            if(mappings[char]){
            stack.push(mappings[char]);
            } else if (stack.pop() !== char) {
            return false;
            }
        }

        return stack.length === 0;
    }
}

// time O(n) 
// space O (n)
