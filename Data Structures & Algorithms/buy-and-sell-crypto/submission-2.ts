class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // create a variable to store maxProfit and set it to 0;
        // create a variable to store minPrice and set it to first number in array
        // iterate through nums array
        // create a variable for current profit and set it to current el - minPrice
        // check if current element in array greater than minPrice
        // if current profit is greater than maxProfit set maxProfit to currentProfit
        //return current profit

        let maxProfit = 0, minPrice = prices[0];
        for (let i = 0; i < prices.length; i++) {
            let currentProfit = prices[i] - minPrice;

            if (prices[i] < minPrice) minPrice = prices[i];

            if (currentProfit > maxProfit) maxProfit = currentProfit;
            
        }

        return maxProfit
    }
}
