import { z } from 'genkit';
import yahooFinance from 'yahoo-finance2';
import { ai } from './genkit';

ai.defineTool(
  {
    name: 'getStockPrice',
    description: 'Get the price for the given stock ticker.',
    inputSchema: z.object({
      symbol: z.string(),
      currency: z.string().optional(),
    }),
    outputSchema: z.any(),
  },
  async (input) => {
    try {
      const quote = await yahooFinance.quote(input.symbol);
      return quote.regularMarketPrice ?? 0;
    } catch (err) {
      console.error(err);
      return 'Unable to fetch stock details.';
    }
  }
);
