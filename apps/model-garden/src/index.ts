import { configureGenkit } from '@genkit-ai/core';
import { googleAI } from '@genkit-ai/googleai';
import {
  claude3Haiku,
  claude3Opus,
  claude3Sonnet,
  vertexAI,
} from '@genkit-ai/vertexai';
import { anthropic } from 'genkitx-anthropic';
import { cohere } from 'genkitx-cohere';
import { groq } from 'genkitx-groq';
import { ollama } from 'genkitx-ollama';
import { openAI } from 'genkitx-openai';

configureGenkit({
  plugins: [
    anthropic(),
    cohere(),
    googleAI({ apiVersion: ['v1', 'v1beta'] }),
    groq(),
    ollama({
      models: [
        { name: 'llama3' },
        {
          name: 'gemma',
          type: 'generate',
        },
      ],
      serverAddress: 'http://127.0.0.1:11434', // default local address
    }),
    openAI(),
    vertexAI({
      location: 'us-central1',
      modelGardenModels: [claude3Haiku, claude3Sonnet, claude3Opus],
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export * from './flows';
export * from './tools';
