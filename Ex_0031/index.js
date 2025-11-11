const { POLYGON_API_KEY, OPENAI_API_KEY_11NOV2025fCC, OPENAI_API_KEY_MyTestKey, ORa_11NOV2025 } = require("./secrets.json");

const { OpenAI } = require('openai');

/*
// With OpenAI, paid service only
const openai = new OpenAI({
    apiKey: OPENAI_API_KEY_MyTestKey,
    dangerouslyAllowBrowser: false
});

// console.log( openai.apiKey);

openai.chat.completions.create({
    model: "gpt-5-nano",
    reasoning: { effort: "low" },
    input: [
        {
            "role": "system",
            "content": "You are a helpful general knowledge expert."
        },
        {
            "role": "user",
            "content": "Who invented the television?"
        }
    ]
})
    .then(response => console.log(response.output_text))
    .catch(err => console.error(`* ERR * Message is ${err}`))
    .finally(() => console.log('Query complete'))
    ;
*/

// With DeepSeek / OpenRouter
// List models available with DeepSeek / OpenRouter:
// curl https://openrouter.ai/api/v1/models -H "Authorization: Bearer $ORa_11NOV2025"
// source: https://openrouter.ai/docs/api-reference/models/get-models
// Good starting point:
// https://medium.com/@fayaz-khan/how-to-use-deepseek-api-for-free-a-step-by-step-guide-b1362aed3e6f
// "Please explain quantum computing to a non scientific person who knows little about computers."

const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: ORa_11NOV2025,
    dangerouslyAllowBrowser: false
});

// console.log( openai.apiKey);
openai.chat.completions.create({
    model: "deepseek/deepseek-chat-v3.1:free",
    messages: [
        {
            "role": "system",
            "content": "You are a helpful general knowledge expert."
        },
        {
            "role": "user",
            "content": "Please explain quantum computing to a non scientific person who knows little about computers."
        }
    ]
})
    .then(response => console.log(response.choices[0].message.content))
    .catch(err => console.error(`* ERR * Message is ${err}`))
    .finally(() => console.log('Query complete'))
    ;

