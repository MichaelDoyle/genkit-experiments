import { gemini20Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';
import { logger } from 'genkit/logging';

logger.setLogLevel('debug');

export const ai = genkit({
  plugins: [googleAI()],
});

ai.defineFlow('flow1', async () => {
  ai.generate({ model: gemini20Flash, prompt: 'Say hello' });
});

export const ai2 = genkit({
  plugins: [googleAI()],
});

ai2.defineFlow('flow2', async () => {
  ai2.generate({ model: gemini20Flash, prompt: 'Say hello' });
});
