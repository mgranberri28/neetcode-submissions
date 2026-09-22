class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // create a variable to store the final profit and set it to 0
        // create a varabile to serve as the min price and set it to the first item in prices
        // loop through prices array
        // check if current element is less than the minprice
        // if so, set min price to current element
        // create a variable of the current profit and set it to the current element - minprice
        // check if current profit is greater than max profit
        // if so set max profit to the current profit
        // outside the loop, return max profit

        let maxProfit: number = 0;
        let minPrice: number = prices[0];

        for (let i = 0; i< prices.length; i++) {

            if(prices[i] < minPrice) {
                minPrice = prices[i];
            }

            let currentProfit = prices[i] - minPrice;

            if(currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }

        return maxProfit;
    }

    //O(n) Time, O(1) space
}
