import "./instrumentation";
import { googleAI } from "@genkit-ai/googleai";
import { gemini20Flash } from "@genkit-ai/googleai";
import { genkit } from "genkit";
import { logger } from "genkit/logging";

async function main() {
  logger.setLogLevel("debug");

  const ai = genkit({
    model: gemini20Flash,
    plugins: [googleAI()],
  });

  const prompt = ai.definePrompt({
    name: "hello-world",
    prompt: "Say hello in Spanish!",
  });

  const results = await prompt();
  console.log(results.text);
}

main();
