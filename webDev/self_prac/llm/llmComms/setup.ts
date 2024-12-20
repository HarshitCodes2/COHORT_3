import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("DUMMYAPIKEY");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export default model;
