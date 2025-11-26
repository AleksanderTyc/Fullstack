import { getData } from "../utils/getData.js";
import { sendResponse } from '../utils/sendResponse.js';
import { parseJSONBody } from '../utils/parseJSONBody.js';
import { addNewSighting } from '../utils/addNewSighting.js';
import { sanitiseSighting } from '../utils/sanitiseSighting.js';
import { sightingEvents } from "../events/sightingEvents.js";

import { stories } from "../data/stories.js";

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

    try {
        const parsedBody = await parseJSONBody(req);
        const sanitisedBody = sanitiseSighting(parsedBody);
        console.log('*** I *** handlePost, sanitisedBody', sanitisedBody);
        await addNewSighting(sanitisedBody);
        sendResponse(res, 'application/json', 201, JSON.stringify(sanitisedBody)); // 201 request processed successfully
        res.end();
        sightingEvents.emit('sighting-added', sanitisedBody);
    }
    catch (err) {
        console.error(`*** ERROR *** handlePost, catch`, err.message);
        sendResponse(res, 'application/json', 400, JSON.stringify({ error: err })); // 400 bad request
        res.end();
    }
    // console.log('POST request received, rawBody is', parsedBody);
}

async function handleNews(req, res) {
    const dateRes = new Date();
    // console.log(`* D * handleNews * ${dateRes} * New request`, req);
    console.log(`* D * handleNews * ${dateRes} * New request`, req.rawHeaders[3], req.rawHeaders[13]);
    
    res.statusCode = 200;

    // Set Content-Type, Cache-Control, Connection headers.
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connectioin', 'keep-alive');

    setInterval(() => {
        let randomIndex = Math.floor(Math.random() * stories.length);

        // Use res.write() to send object to client. The object should contain:
        // - an event property with a descriptive name
        // - a story chosen at random from the stories array
        // The object is contained in a string which starts with 'data: '.
        // At the end of the string there are two new-line characters.
        res.write(`data: ${JSON.stringify({ event: 'news-updated', story: stories[randomIndex] })}\n\n`);

        const dateRes = new Date();
        console.log(`* I * handleNews * ${dateRes} * New story selected at random, index ${randomIndex}`, req.rawHeaders[3], req.rawHeaders[13]);

        // My take: A new setInterval will be set for every new request, even from the same client (Reload).
        // There is no mechanism to unlink setInterval from dead client or to terminate such request (res.end()).
    }, 3000);

}
export { handleGet, handlePost, handleNews };
