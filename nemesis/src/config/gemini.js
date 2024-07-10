// import {
//    GoogleGenerativeAI,
//    HarmCategory,
//    HarmBlockThreshold,
// } from "@google/generative-ai";

// const apiKey = "AIzaSyBSEuOwnn3d_qjwRkwIdg2ie3j0FoZlW3s";
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//    model: "gemini-1.5-flash",
// });


// const generationConfig = {
//    temperature: 1,
//    topP: 0.95,
//    topK: 64,
//    maxOutputTokens: 8192,
//    responseMimeType: "text/plain",
// };

// async function run(prompt) {
//    const chatSession = model.startChat({
//       generationConfig,
//       // safetySettings: Adjust safety settings
//       // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [],
//    });

//    const result = await chatSession.sendMessage(prompt);
//    console.log(result.response.text());
// }

import {GoogleGenerativeAI} from "@google/generative-ai";

const API_KEY = 'AIzaSyBSEuOwnn3d_qjwRkwIdg2ie3j0FoZlW3s'

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


async function run(prompt) {
   // prompt = "Write a story about a AI and magic";

   const result = await model.generateContent(prompt);
   const response = result.response;
   const text = response.text();
   // console.log(text);
   return response.text();
}

// run();

export default run;