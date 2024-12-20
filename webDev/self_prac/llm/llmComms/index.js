"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLLMResponse = exports.firstTimeLLMComms = void 0;
const setup_1 = __importDefault(require("./setup"));
const prompts_1 = require("./prompts");
function extractAndParseJSON(input) {
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
    }
    catch (error) {
        throw new Error("Failed to parse JSON string: " + error.message);
    }
}
const firstTimeLLMComms = (userRequest) => __awaiter(void 0, void 0, void 0, function* () {
    yield setup_1.default.generateContent(prompts_1.SYSTEM_PROMPT);
    const TECH_STACK_PROMPT = (0, prompts_1.TECH_STACK_PROMPT_GENERATOR)(userRequest);
    const techStackOp = yield setup_1.default.generateContent(TECH_STACK_PROMPT);
    const techStack = techStackOp.response.text();
    console.log(techStack);
    const techStackJson = extractAndParseJSON(techStack);
    console.log(techStackJson);
    const DIRECTORY_STRUCTURE_PROMPT = (0, prompts_1.TECH_STACK_SETUP_PROMPT_GENERATOR)(techStack);
    const dirStructOP = yield setup_1.default.generateContent(DIRECTORY_STRUCTURE_PROMPT);
    const dirStruct = dirStructOP.response.text();
    console.log(dirStruct);
    const dirStructJson = extractAndParseJSON(dirStruct);
    console.dir(dirStructJson);
});
exports.firstTimeLLMComms = firstTimeLLMComms;
const getLLMResponse = (userRequest) => __awaiter(void 0, void 0, void 0, function* () {
    yield setup_1.default.generateContent(prompts_1.SYSTEM_PROMPT);
    const TECH_STACK_PROMPT = (0, prompts_1.TECH_STACK_PROMPT_GENERATOR)(userRequest);
    const techStack = yield setup_1.default.generateContent(TECH_STACK_PROMPT);
});
exports.getLLMResponse = getLLMResponse;
(0, exports.firstTimeLLMComms)("Create a todo app in react");
