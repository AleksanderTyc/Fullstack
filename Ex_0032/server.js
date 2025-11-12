// package.json > scripts.start shows the command to run the project, here it is `node server.js`
// So instead of running `$ node server.js` we can run `$ npm start` with the same effect.

console.log('Hello Node!\nWe have package.json');

// For this to work we need to switch the project to ES JS mode in package.json and nclude the line
// "type": "module",
// import http from 'http';
import http from 'node:http'; // Core Node module, not a module which we created ourselves.

const PORT = 8000; // Which port are we listening on

// Watching headers: Browser > Developer Tools > Network > GET the page >
// Server address (e.g. localhost) should be visible at the BottomLeft panel under Name, click >
// Headers, etc. should be displayed at the BottomRight panel

const server = http.createServer((req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`);
    res.write('This is some data\non a new line.'); // We won't be using this in the project. res.end is still required, even if just res.end();
    res.end('Hello from server', 'utf8', () => {
        const dateResEnd = new Date();
        console.log(`${dateResEnd} * End callback running`);
    }); // Sends data over HTTP and ends the response.
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/* Challenge - from memory */
/*
const server = http.createServer(
    (req, res) => {
        res.end('Served');
    });

server.listen(PORT, () => console.log('Server ready') );
*/
