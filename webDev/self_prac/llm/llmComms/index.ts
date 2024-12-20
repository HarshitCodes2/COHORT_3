import model from "./setup";
import {
  SYSTEM_PROMPT,
  TECH_STACK_PROMPT_GENERATOR,
  TECH_STACK_SETUP_PROMPT_GENERATOR,
  LLM_OUTPUT_PROMPT_GENERATOR,
} from "./prompts";

function extractAndParseJSON(input: string): any {
  // Use a regular expression to match the JSON content
  const jsonMatch = input.match(/\{[\s\S]*\}/);

  if (!jsonMatch) {
    throw new Error("No JSON content found");
  }

  // Extract the JSON string
  const jsonString = jsonMatch[0];

  // Parse the JSON string
  try {
    const parsedObject = JSON.parse(jsonString.replace(/(\w+):/g, '"$1":'));
    return parsedObject;
  } catch (error: any) {
    throw new Error("Failed to parse JSON string: " + error.message);
  }
}

export const firstTimeLLMComms = async (userRequest: string) => {
  await model.generateContent(SYSTEM_PROMPT);

  const TECH_STACK_PROMPT = TECH_STACK_PROMPT_GENERATOR(userRequest);

  const techStackOp = await model.generateContent(TECH_STACK_PROMPT);

  const techStack = techStackOp.response.text();

  const techStackJson = extractAndParseJSON(techStack);
  console.log(techStackJson);

  const DIRECTORY_STRUCTURE_PROMPT =
    TECH_STACK_SETUP_PROMPT_GENERATOR(techStackJson);

  const dirStructOP = await model.generateContent(DIRECTORY_STRUCTURE_PROMPT);

  const dirStruct = dirStructOP.response.text();

  const dirStructJson = extractAndParseJSON(dirStruct);
  console.dir(dirStructJson);
};

export const getLLMResponse = async (userRequest: string) => {
  await model.generateContent(SYSTEM_PROMPT);

  const TECH_STACK_PROMPT = TECH_STACK_PROMPT_GENERATOR(userRequest);

  const techStack = await model.generateContent(TECH_STACK_PROMPT);
};

firstTimeLLMComms("Create a todo app in react");
