class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // create a variable to store max profit and set it to zero
        // create a variable to store min price and set it to first item in array
        // iterate through prices array
        // create a variable to store current profit 

        let maxProfit: number = 0, minPrice: number = prices[0];

        for (let i = 0; i < prices.length; i++) {
            let currentProfit: number = prices[i] - minPrice;

            if(prices[i] < minPrice) minPrice = prices[i];

            if(currentProfit > maxProfit) maxProfit = currentProfit;
        }

        return maxProfit
    }
}
