import { defineTool } from '@genkit-ai/ai/tool';
import yahooFinance from 'yahoo-finance2';
import * as z from 'zod';

defineTool(
  {
    name: 'getStockPrice',
    description: 'Get the price for the given stock ticker.',
    inputSchema: z.object({ symbol: z.string() }),
    outputSchema: z.any(),
  },
  async (input) => {
    const quote = await yahooFinance.quote(input.symbol);
    return quote.regularMarketPrice ?? 0;
  }
);
