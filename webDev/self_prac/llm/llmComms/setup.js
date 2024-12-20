"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generative_ai_1 = require("@google/generative-ai");
const genAI = new generative_ai_1.GoogleGenerativeAI("AIzaSyDzhH594M97iXBh-x2BrWJHp9B6XmcJ5cg");
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});
exports.default = model;
