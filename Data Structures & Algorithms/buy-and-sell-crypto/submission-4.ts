class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
      let maxProfit = 0, minPrice = prices[0];

      for(let i = 0; i < prices.length; i++) {
        let currentProfit = prices[i] - minPrice;

        if (maxProfit < currentProfit) {
          maxProfit = currentProfit
        }

        if (prices[i] < minPrice) minPrice = prices[i]

      }
      
      return maxProfit;
    }
}
