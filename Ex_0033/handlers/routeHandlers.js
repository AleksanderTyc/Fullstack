import { getData } from "../utils/getData.js";
import { sendResponse } from '../utils/sendResponse.js';

// handle GET
async function handleGet(res) {
    const parsedData = await getData();
    sendResponse(res, 'application/json', 200, JSON.stringify(parsedData));
    res.end();
}
// handle POST

export { handleGet };
