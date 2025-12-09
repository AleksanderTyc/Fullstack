// See project Ex_0031 for extra details.
// Note that the model used in Ex_0031 is no longer available as of time of writing this script (one month after).
// A different model was selected from the list of models available through OpenRouter:
// https://openrouter.ai/docs/guides/overview/models
// https://openrouter.ai/models

// See
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
// for details how to import JSON data in ES modules.
//
// const { POLYGON_API_KEY, OPENAI_API_KEY_11NOV2025fCC, OPENAI_API_KEY_MyTestKey, ORa_11NOV2025 } = require("./secrets.json");
// import { POLYGON_API_KEY, OPENAI_API_KEY_11NOV2025fCC, OPENAI_API_KEY_MyTestKey, ORa_11NOV2025 } from "./secrets.json"  with { type: "json" };
import jsonData from "./secrets.json" with { type: "json" };

import { OpenAI } from 'openai';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.
`;

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: jsonData.ORa_11NOV2025,
    dangerouslyAllowBrowser: true
});

async function getRecipeFromAI(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await openai.chat.completions.create({
            model: "tngtech/deepseek-r1t2-chimera:free",
            messages: [
                {
                    "role": "system",
                    "content": SYSTEM_PROMPT
                },
                {
                    "role": "user",
                    "content": `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`
                }
            ],
            max_tokens: 1024
        });
        // return response.choices[0].message.content;
        return response;
    }
    catch (err) {
        console.log('* E * Error obtaining recipe from AI', err.message);
    }
}

export { getRecipeFromAI };
