class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        // create a variable to store maxProfit and set it to 0
        // create a variable to currentPrice and set it to first element in array
        // iterate through prices array 
        // create a variable to store current profit and set it to set current element -  minPrice
        // check if current element is less than current price
        // if so, set minprice to current element
        // check if current profit is greater than max profit
        // if so set max profit to current profit
        // return max profit outside loop

        let maxProfit: number = 0;
        let minPrice: number = prices[0];

        for (let i = 0; i < prices.length; i++) {
            let currentProfit: number = prices[i] - minPrice;
                            
            if (prices[i] < minPrice) {
                minPrice = prices[i]
            }

            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        }
        
        return maxProfit;
    }
}

// O(n)
//O(1)
