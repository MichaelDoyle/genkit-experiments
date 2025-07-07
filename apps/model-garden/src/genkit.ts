import { googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';
import { logger } from 'genkit/logging';
import anthropic from 'genkitx-anthropic';
import cohere from 'genkitx-cohere';
import groq from 'genkitx-groq';
import { mcpClient } from 'genkitx-mcp';
import { ollama } from 'genkitx-ollama';
import openAI from 'genkitx-openai';

logger.setLogLevel('info');

const firebaseMcp = mcpClient({
  name: 'filesystem',
  serverProcess: {
    command: 'npx',
    args: ['-y', 'firebase-tools@latest', 'experimental:mcp'],
  },
});

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
    firebaseMcp,
  ],
});
