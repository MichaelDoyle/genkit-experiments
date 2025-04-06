import { googleAI } from '@genkit-ai/googleai';
import vertexAI from '@genkit-ai/vertexai';
import {
  claude35Sonnet,
  claude35SonnetV2,
  claude3Haiku,
  claude3Opus,
  claude3Sonnet,
  codestral,
  llama31,
  llama32,
  mistralLarge,
  mistralNemo,
  vertexAIModelGarden,
} from '@genkit-ai/vertexai/modelgarden';
import { genkit } from 'genkit';
import { logger } from 'genkit/logging';
import anthropic from 'genkitx-anthropic';
import cohere from 'genkitx-cohere';
import groq from 'genkitx-groq';
import { ollama } from 'genkitx-ollama';
import openAI from 'genkitx-openai';

logger.setLogLevel('info');

export const ai = genkit({
  plugins: [
    googleAI(),
    ollama({
      models: [
        {
          name: 'codestral',
        },
        {
          name: 'gemma3:4b',
        },
      ],
      serverAddress: 'http://127.0.0.1:11434', // default local address
    }),

    anthropic(),
    cohere(),
    groq(),
    openAI(),
    vertexAI({
      location: 'us-central1',
    }),
    vertexAIModelGarden({
      location: 'us-central1',
      models: [
        claude35Sonnet,
        claude35SonnetV2,
        claude3Haiku,
        claude3Opus,
        claude3Sonnet,
        codestral,
        llama31,
        llama32,
        mistralLarge,
        mistralNemo,
      ],
    }),
  ],
});
