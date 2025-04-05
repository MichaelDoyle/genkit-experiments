import { googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';
import { logger } from 'genkit/logging';
import { ollama } from 'genkitx-ollama';

logger.setLogLevel('info');

export const ai = genkit({
  plugins: [
    googleAI(),
    ollama({
      models: [
        {
          name: 'llama3.2:latest',
        },
        {
          name: 'gemma3:4b',
        },
        {
          name: 'gemma3:12b',
        },
        {
          name: 'gemma3:27b',
        },
      ],
      serverAddress: 'http://127.0.0.1:11434', // default local address
    }),

    // anthropic(),
    // cohere(),
    // groq(),
    // openAI(),
    // vertexAI({
    //   location: 'us-central1',
    // }),
    // vertexAIModelGarden({
    //   location: 'us-central1',
    //   models: [
    //     claude35Sonnet,
    //     claude35SonnetV2,
    //     claude3Haiku,
    //     claude3Opus,
    //     claude3Sonnet,
    //     codestral,
    //     llama31,
    //     llama32,
    //     mistralLarge,
    //     mistralNemo,
    //   ],
    // }),
  ],
});
