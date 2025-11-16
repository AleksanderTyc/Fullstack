import path from 'node:path';
import fs from 'node:fs/promises';
import { sendResponse } from './sendResponse.js';

async function serveStatic(req, res, baseDir, resName = 'index.html') {
    const pathToResource = path.join(baseDir, 'public', resName);
    try {
        const content = await fs.readFile(pathToResource); // utf8 deleted.
        sendResponse(res, 'text/html; charset=utf-8', 200, content);
        res.end();
    }
    catch (err) {
        sendResponse(res, 'text/html; charset=utf-8', 404, err.message);
        res.end();
    }
}

export { serveStatic };
