import { getData } from "../utils/getData.js";
import { sendResponse } from '../utils/sendResponse.js';
import { parseJSONBody } from '../utils/parseJSONBody.js';

// handle GET
async function handleGet(res) {
    const parsedData = await getData();
    sendResponse(res, 'application/json', 200, JSON.stringify(parsedData));
    res.end();
}

// handle POST
// POST functionality:
// 1 Collect incoming data
// 2 Parse it
// 3 Sanitise it
// 4 Collate it with existing data, i.e. fetch existing data, then add new data to existing data
// 5 Write it to JSON file
// 4.1. fetch existing data: utils/getData
// 4.2. add new to existing: existing.push(new), because getData parses JSON into JS array of objects
// We will create new utility functions:
// - parseJSONBody - collect and parse incoming JSON
// - sanitizeData - my teeth ache
// - addNewSighting - cover point #4
// Now about #1 Collect incoming data:
// - req object is an iterable object, which contains "chunks" of data, which the client has sent
// - these chunks must be collated to recreate the complete message
// - each chunk is returned from an async function, which further complicates the code
// - to make it happen a special syntax is used:
// ```
// let message = '';
// for await (const chunk of req) {
//     message += chunk;
// }
// ```
// Then message is a JSON string, which may be parsed to a JS Object.

async function handlePost(req, res) {
    const rawBody = await parseJSONBody(req);

    // sendResponse(res, 'application/json', 200, JSON.stringify(we do not yet know what));
    res.end();
    console.log( 'POST request received, rawBody is', rawBody);
}

export { handleGet, handlePost };
