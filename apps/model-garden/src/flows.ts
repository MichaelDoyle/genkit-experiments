import { generate } from '@genkit-ai/ai';
import { defineFlow } from '@genkit-ai/flow';
import { gemini15Flash } from '@genkit-ai/googleai';
import * as z from 'zod';

export const helloWorldFlow = defineFlow(
  {
    name: 'helloWorldFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (language) => {
    const response = await generate({
      prompt: `Say hello in ${language}.`,
      model: gemini15Flash,
      config: {
        temperature: 0.6,
      },
    });

    return response.text();
  }
);
