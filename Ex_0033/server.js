import http from "node:http";

const PORT = 8000;
// console.log('server.js import.meta', import.meta, __dirname ); // __dirname works in CommonJS only ?

// import { testImport } from './public/testImport.js'; // console.log which is part of the module will execute before console.log 2 lines above

// We would like to work with a file `${import.meta.dirname}/public/thisOrThat.extension`, but this is OS-specific
// Instead we will use CWD and Path module.
// Paths specified using the Path module are relative to CWD (and not to the file where the code resides).
console.log('CWD', process.cwd());
import path from 'node:path';

const __dirname = import.meta.dirname;

import { serveStatic } from './utils/serveStatic.js';
console.log('serveStatic', serveStatic(__dirname));

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

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

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
