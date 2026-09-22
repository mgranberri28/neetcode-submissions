class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
    // input: string, output: bool
    // create two variables, one will be equal to the first char in string
    // second will be equal to last character in string
    // iterate while left string is less than right
    // while left is less than right and the current char at the left position is alphanumeric
        // increment left
    // while left is less than right and the current char at the righ position is alphanumeric
        // decrement right
    //check if both chars are not equal
        // return false
    // increment left, decrement right
    // return true outside loop

    let left: number = 0;
    let right: number = s.length - 1;

    while (left < right) {

        while(left < right && !/[a-z0-9]/.test(s[left])) {
            left++;
        }

        while(left < right && !/[a-z0-9]/.test(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--
    }

    return true;

    }
    //O(n) time, O(1) space

}

