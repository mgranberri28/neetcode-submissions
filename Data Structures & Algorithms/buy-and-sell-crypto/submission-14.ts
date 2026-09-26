class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
      let maxProfit: number = 0, currentPrice: number = prices[0];

      for (let i = 0; i < prices.length; i++) {
        const currentProfit: number = prices[i] - currentPrice;

        if(maxProfit < currentProfit) maxProfit = currentProfit;

        if (currentPrice > prices[i]) currentPrice = prices[i]
      }

      return maxProfit;
    }
}
