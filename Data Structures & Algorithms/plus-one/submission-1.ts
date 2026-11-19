class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        // combine all nums to one number
        // add one to that number
        // convert to a string and seperate nums
        // convert back to a number
        // return array

        const combined = Number(digits.join('')) + 1;

        const strArr = String(combined).split('');

        return strArr.map(char => Number(char));
        

    }

}
