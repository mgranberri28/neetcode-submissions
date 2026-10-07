class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        // convert array elements to one string
        // convert to a number and add one to it
        // store in an array and co string seperated by digits and

        const strNums = digits.map(num => num.toString()).join("");
        const num = Number(strNums) + 1
        const str = num.toString();
        const split = str.split("");


        return split.map(s => Number(s));
    }
}
