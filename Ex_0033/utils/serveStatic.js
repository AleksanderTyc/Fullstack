import path from 'node:path';
import fs from 'node:fs/promises';
import { sendResponse } from './sendResponse.js';

import mime from 'mime-types';

async function serveStatic(req, res, baseDir) {
    const dateRes = new Date();
    const reqResName = req.url.slice(1);
    const pathToResource = path.join(baseDir, 'public', reqResName === '' ? 'index.html' : reqResName);
    const mimeType = mime.contentType(mime.lookup(pathToResource)) || 'text/html; charset=utf-8'; // default to text/html when unknown extension is served
    // It works, because mime functions return false when they don't know what to return.
    // console.log(`${dateRes} *`, mime.lookup(pathToResource), mime.contentType(mime.lookup(pathToResource)) );
    // console.log(`${dateRes} * getContentType`, getContentType(path.extname(pathToResource)) );
    console.log(`${dateRes} * Request serviced`, pathToResource);
    try {
        const content = await fs.readFile(pathToResource); // utf8 deleted.
        sendResponse(res, mimeType, 200, content);
        res.end();
    }
    catch (err) {
        if (err.code === 'ENOENT') {
            const content = await fs.readFile(path.join(baseDir, 'public', '404.html')); // utf8 deleted.
            sendResponse(res, 'text/html; charset=utf-8', 404, content);
            res.end();
        } else {
            sendResponse(res, 'text/html; charset=utf-8', 500, `<html><h1>Server error: ${err.code}</h1></html>`);
            res.end();
        }
    }
}

export { serveStatic };

/*
// Never used, mime-type package installed and used instead
function getContentType(ext) {

    const types = {
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml"
    }

    return types[ext.toLowerCase()] || "text/html"
}
*/
