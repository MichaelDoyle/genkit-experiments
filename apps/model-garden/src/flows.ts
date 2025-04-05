import { gemini15Flash } from '@genkit-ai/googleai';
import { z } from 'genkit';
import { ai } from './genkit';

export const helloWorldFlow = ai.defineFlow(
  {
    name: 'helloWorldFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (language, flowStreamingCallback) => {
    const response = ai.generate({
      prompt: `Say hello in ${language}, and provide some history about a country that speaks ${language}.`,
      model: gemini15Flash,
      config: {
        temperature: 0.6,
      },
      streamingCallback: (chunk) => {
        if (flowStreamingCallback) {
          flowStreamingCallback(chunk);
        }
      },
    });
    return (await response).text;
  }
);
