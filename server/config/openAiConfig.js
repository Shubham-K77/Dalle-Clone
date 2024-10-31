//Imports
import dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();
// Constants
const openAiApi = process.env.openAiApi;
// Configuration
const openai = new OpenAI({
  apiKey: openAiApi,
});
// Exports
export default openai;
