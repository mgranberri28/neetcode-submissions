class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // create a record to hold strings
        // iterate through strs array
        // create a variable equal to the value of the current string sorted
        // check if the current sorted element inside the record is equal to 
        // current element in
        // if so push that element inside the record

        //return the  object values of the record

        const dict = {};

        strs.forEach((str) => {
            const sorted = str.split("").sort().join("");
            dict[sorted] = dict[sorted] ?? [];
            dict[sorted].push(str);  
        })

        return Object.values(dict);

    }
    
}
