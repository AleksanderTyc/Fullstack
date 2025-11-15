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

const server = http.createServer((req, res) => {
    const pathToResource = path.join(import.meta.dirname, 'public', 'index.html');
    console.log('pathToResource', pathToResource);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    // Alternatively:
    /*
    res.writeHead(
        200,
        {
            'Content-Type': 'text/html; charset=utf-8'
    });
    // Sends the header immediately, no further modification is possible, e.g. res.setHeader has no effect
    */
    res.write('<html><h1>The server is working</h1></html>');
    res.end();
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

// console.log('server.js last line', import.meta, testImport());
// import.meta refers to this module; import.meta mentioned within testImport body refers to ./public/testImport.js file
