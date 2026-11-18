class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let maxProfit = 0, minPrice = prices[0];

        for (let i = 0; i < prices.length; i++) {
            const currentProfit = prices[i] - minPrice;

            if (minPrice > prices[i]) minPrice = prices[i];

            if(maxProfit < currentProfit) maxProfit = currentProfit; 
        }

        return maxProfit;
    }
}
