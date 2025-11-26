import http from "node:http";

const PORT = 8000;
// console.log('server.js import.meta', import.meta, __dirname ); // __dirname works in CommonJS only ?

// import { testImport } from './public/testImport.js'; // console.log which is part of the module will execute before console.log 2 lines above

// We would like to work with a file `${import.meta.dirname}/public/thisOrThat.extension`, but this is OS-specific
// Instead we will use CWD and Path module.
// Paths specified using the Path module are relative to CWD (and not to the file where the code resides).
// console.log('CWD', process.cwd());

// import path from 'node:path';
import { serveStatic } from './utils/serveStatic.js';
// import fs from 'node:fs/promises';
const __dirname = import.meta.dirname;

// import { getData } from "./utils/getData.js";
import { handleGet, handlePost, handleNews } from "./handlers/routeHandlers.js";

const server = http.createServer(async (req, res) => {

    if (req.url.startsWith('/api/news')) {
        return await handleNews(req, res);
    }
    
    else if (req.url.startsWith('/api')) {
        if (req.method === 'GET') {
            await handleGet(res);
        }
        
        else if (req.method === 'POST') {
            await handlePost(req, res);
        }
    }
    
    else {
        // Third method, asynchronous, using async / await
        await serveStatic(req, res, __dirname);
    }
});

server.listen(PORT, async () => {
    // We can have it here, to have await inside an async function...
    // console.log('*** DIAG *** data', await getData(__dirname));
    console.log(`Listening on ${PORT}`);
});

// ...or we can have it here, using .then, to avoid await in top level code.
// getData(__dirname).then(d => console.log('*** DIAG *** data', d));
// console.log('*** DIAG *** data', await getData(__dirname)); // WFT?!? It works, too. Maybe it is the ES thing...

// console.log('server.js last line', import.meta, testImport());
// import.meta refers to this module; import.meta mentioned within testImport body refers to ./public/testImport.js file

/*
// Sending a hard-coded HTML
const server = http.createServer((req, res) => {
    const pathToResource = path.join(import.meta.dirname, 'public', 'index.html');
    console.log('pathToResource', pathToResource);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    // Alternatively:
    /Comment here
    res.writeHead(
        200,
        {
            'Content-Type': 'text/html; charset=utf-8'
    });
    // Sends the header immediately, no further modification is possible, e.g. res.setHeader has no effect
    Comment ends here/
    res.write('<html><h1>The server is working</h1></html>');
    res.end();
});
*/

/*
// FS read synchronous and async first take
import fs from 'node:fs';
const server = http.createServer((req, res) => {
    const pathToResource = path.join(import.meta.dirname, 'public', 'index.html');

    // First method, we don't use it:
    // const content = fs.readFileSync(pathToResource, 'utf8');
    // Problem with this: ...Sync - it is blocking, we prefer asynchronous

    // Second method, asynchronous
    fs.readFile(pathToResource, 'utf8', (err, content) => {
        if (err) {
            console.error(err);
            return;
        } else {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.statusCode = 200;
            res.write(content);
            res.end();
        }
    });
});
*/

/*
// FS read asynchronous with async / await
const server = http.createServer(async (req, res) => {
    // Third method, asynchronous, using async / await
    const pathToResource = serveStatic(__dirname);
    const content = await fs.readFile(pathToResource); // utf8 deleted.
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write(content);
    res.end();
});
*/

/*
// CommonJS vs ES
require vs import - see FullstackNotes.md
console.log(__dirname); vs console.log( import.meta.dirname );
console.log(__filename); vs console.log( import.meta.filename );
// Before JS ES Node 20:
import path from 'node:path';
import url from 'node:url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Slick, eh?
*/

