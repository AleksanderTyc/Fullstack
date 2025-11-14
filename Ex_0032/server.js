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

// Server response object:
// https://www.w3schools.com/nodejs/obj_http_serverresponse.asp

// Parsing url:
// https://dmitripavlutin.com/parse-url-javascript/
/* Some notes:
        const curURL = new URL(req.url);
        const pathComponents = curURL.pathname.split('/');
*/

import { getDataFromDB } from './dbase/db.js';
import { sendJSONResponse } from './utils/sendJSONResponse.js';
import { getDataByPathParams, getDataByQueryParams } from './utils/getDataByPathParams.js';

const server = http.createServer(async (req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`, req.url);
    if (req.method === 'GET') {
        const data = await getDataFromDB();
        const urlObj = new URL(req.url, `http://${req.headers.host}`);
        const pathComponents = urlObj.pathname.split('/');
        const queryObj = Object.fromEntries(urlObj.searchParams);
        console.log(`${dateRes} * urlObj.pathname ${urlObj.pathname}, qurey parameters is`, queryObj, 'pathComponents is', pathComponents);
        if (urlObj.pathname === '/api') {
            const filteredData = getDataByQueryParams(data, queryObj); // vulnerable: parameters beyond the scope
            sendJSONResponse(res, 200, filteredData);
        } else {
            console.log('DIAG *', req.url.slice(0, 14));
            console.log('Default * branch');
            console.log('Default * method', req.method, 'url', req.url); // method GET url /favicon.ico
            console.log('Default * branch end');
            sendJSONResponse(res, 404, { error: 'not found', message: 'The request route does not exist - GEN' });
        }
    } else {
        console.log('The other branch');
        console.log('method', req.method, 'url', req.url); // method not GET
        console.log('The other branch end');
    }
    res.end();
    console.log(`${dateRes} * New request has been serviced, statusCode is `, res.statusCode);
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

/*
// Using res.write
const server = http.createServer((req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`);
    res.write('This is some data\non a new line.'); // We won't be using this in the project. res.end is still required, even if just res.end();
    res.end('Hello from server', 'utf8', () => {
        const dateResEnd = new Date();
        console.log(`${dateResEnd} * End callback running`);
    }); // Sends data over HTTP and ends the response.
});
*/

/*
// JSON stringify and parse
const animal = {
    type: 'elephant',
    nickName: 'Elon Tusk'
};
const animalSFied = JSON.stringify(animal);
const animalRRieved = JSON.parse(animalSFied);
console.log(`1. Original: ${typeof animal}, ${animal}`, animal);
console.log(`1. SFied: ${typeof animalSFied}, ${animalSFied}`, animalSFied);
console.log(`1. RRieved: ${typeof animalRRieved}, ${animalRRieved}`, animalRRieved);
*/

/*
// Respond only to specific URL and method
const server = http.createServer((req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`);
    // res.write(' ');
    if ((req.method === 'GET') && (req.url === '/api')) {
        res.write('Hello from server');
        // res.end('Hello from server');
    }
    res.end();
});
*/

/*
// Header and some extra diagnostics
const server = http.createServer(async (req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`);
    // res.write(' ');
    if ((req.method === 'GET') && (req.url === '/api')) {
        const data = await getDataFromDB();
        console.log(`Request being serviced, Content-Type header is ${res.getHeader('Content-Type')}`);
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(data[0]));
        // res.end('Hello from server');
    } else {
        console.log('The other branch');
        console.log('method', req.method, 'url', req.url); // method GET url /favicon.ico
        console.log('The other branch end');
    }
    res.end();
    console.log(`${dateRes} * New request has been serviced, statusCode is `, res.statusCode);
});
*/

/*
// /api vs other endpoints, but actually this is no good, as the endpoint is data driven
const server = http.createServer(async (req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`);
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        switch (req.url) {
            case  '/api':
                res.statusCode = 200;
                const data = await getDataFromDB();
                console.log(`Request being serviced, Content-Type header is ${res.getHeader('Content-Type')}`);
                res.write(JSON.stringify(data[0]));
                        break;
        
            default:
                console.log('Default * branch');
                console.log('Default * method', req.method, 'url', req.url); // method GET url /favicon.ico
                console.log('Default * branch end');
                res.statusCode = 404;
                res.write(JSON.stringify({
                    error: 'not found',
                    message: 'The request route does not exist'
                }));
                        break;
        }
    } else {
        console.log('The other branch');
        console.log('method', req.method, 'url', req.url); // method GET url /favicon.ico
        console.log('The other branch end');
    }
    res.end();
    console.log(`${dateRes} * New request has been serviced, statusCode is `, res.statusCode);
});
*/

/*
// endpoints served from a simulated database
const server = http.createServer(async (req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`, req.url);
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        const pathComponents = req.url.split('/');
        if (req.url === '/api') {
            res.statusCode = 200;
            const data = await getDataFromDB();
            console.log(`Request being serviced, Content-Type header is ${res.getHeader('Content-Type')}`);
            res.write(JSON.stringify(data[0]));
        } else if (req.url.slice(0, 14) === '/api/continent') {
            if( pathComponents.length === 4 ) {
                res.statusCode = 200;
                const data = await getDataFromDB();
                console.log(`Request being serviced`);
                res.write(JSON.stringify(data.filter(elem => elem.continent.toLowerCase() === pathComponents[3].toLowerCase())));
            } else {
                res.statusCode = 404;
                res.write(JSON.stringify({
                    error: 'not found',
                    message: 'The request route does not exist - continent'
                }));
            }
            console.log(pathComponents, 'Search for', pathComponents[pathComponents.length - 1]);
        } else {
            console.log('DIAG *', req.url.slice(0, 14));
            console.log('Default * branch');
            console.log('Default * method', req.method, 'url', req.url); // method GET url /favicon.ico
            console.log('Default * branch end');
            res.statusCode = 404;
            res.write(JSON.stringify({
                error: 'not found',
                message: 'The request route does not exist - GEN'
            }));
        }
    } else {
        console.log('The other branch');
        console.log('method', req.method, 'url', req.url); // method GET url /favicon.ico
        console.log('The other branch end');
    }
    res.end();
    console.log(`${dateRes} * New request has been serviced, statusCode is `, res.statusCode);
});
*/

/*
// Refactored to use sendJSONResponse
const server = http.createServer(async (req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`, req.url);
    if (req.method === 'GET') {
        // res.setHeader('Content-Type', 'application/json');
        const pathComponents = req.url.split('/');
        const data = await getDataFromDB();
        if (req.url === '/api') {
            // res.statusCode = 200;
            console.log(`Request being serviced, Content-Type header is ${res.getHeader('Content-Type')}`);
            // res.write(JSON.stringify(data[0]));
            sendJSONResponse(res, 200, data[0]);
        } else if (req.url.slice(0, 14) === '/api/continent') {
            if (pathComponents.length === 4) {
                // res.statusCode = 200;
                // const data = await getDataFromDB();
                console.log(`Request being serviced`);
                // res.write(JSON.stringify(data.filter(elem => elem.continent.toLowerCase() === pathComponents[3].toLowerCase())));
                sendJSONResponse(res, 200, JSON.stringify(data.filter(elem => elem.continent.toLowerCase() === pathComponents[3].toLowerCase())));
            } else {
                // res.statusCode = 404;
                // res.write(JSON.stringify({
                //     error: 'not found',
                //     message: 'The request route does not exist - continent'
                // }));
                sendJSONResponse(res, 404, { error: 'not found', message: 'The request route does not exist - continent' });
            }
            console.log(pathComponents, 'Search for', pathComponents[pathComponents.length - 1]);
        } else {
            console.log('DIAG *', req.url.slice(0, 14));
            console.log('Default * branch');
            console.log('Default * method', req.method, 'url', req.url); // method GET url /favicon.ico
            console.log('Default * branch end');
            // res.statusCode = 404;
            // res.write(JSON.stringify({
            //     error: 'not found',
            //     message: 'The request route does not exist - GEN'
            // }));
            sendJSONResponse(res, 404, { error: 'not found', message: 'The request route does not exist - GEN' });
        }
    } else {
        console.log('The other branch');
        console.log('method', req.method, 'url', req.url); // method GET url /favicon.ico
        console.log('The other branch end');
    }
    res.end();
    console.log(`${dateRes} * New request has been serviced, statusCode is `, res.statusCode);
});
*/

/*
// Refactored to use getDataByPathParams
const server = http.createServer(async (req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`, req.url);
    if (req.method === 'GET') {
        const pathComponents = req.url.split('/');
        const data = await getDataFromDB();
        if (req.url === '/api') {
            console.log(`Request being serviced, Content-Type header is ${res.getHeader('Content-Type')}`);
            sendJSONResponse(res, 200, data[0]);
        } else if (req.url.slice(0, 14) === '/api/continent') {
            if (pathComponents.length === 4) {
                console.log(`Request being serviced - continent`);
                const filteredData = getDataByPathParams(data, pathComponents[2],pathComponents[3]);
                sendJSONResponse(res, 200, JSON.stringify(filteredData));
                // sendJSONResponse(res, 200, JSON.stringify(data.filter(elem => elem.continent.toLowerCase() === pathComponents[3].toLowerCase())));
            } else {
                sendJSONResponse(res, 404, { error: 'not found', message: 'The request route does not exist - continent' });
            }
            console.log(pathComponents, 'Search for', pathComponents[pathComponents.length - 1]);
        } else if (req.url.slice(0, 12) === '/api/country') { // req.url.startsWith('/api/country')
            if (pathComponents.length === 4) {
                console.log(`Request being serviced - country`);
                const filteredData = getDataByPathParams(data, pathComponents[2],pathComponents[3]);
                sendJSONResponse(res, 200, JSON.stringify(filteredData));
                // sendJSONResponse(res, 200, JSON.stringify(data.filter(elem => elem.country.toLowerCase() === pathComponents[3].toLowerCase())));
            } else {
                sendJSONResponse(res, 404, { error: 'not found', message: 'The request route does not exist - country' });
            }
            console.log(pathComponents, 'Search for', pathComponents[pathComponents.length - 1]);
        } else {
            console.log('DIAG *', req.url.slice(0, 14));
            console.log('Default * branch');
            console.log('Default * method', req.method, 'url', req.url); // method GET url /favicon.ico
            console.log('Default * branch end');
            sendJSONResponse(res, 404, { error: 'not found', message: 'The request route does not exist - GEN' });
        }
    } else {
        console.log('The other branch');
        console.log('method', req.method, 'url', req.url); // method GET url /favicon.ico
        console.log('The other branch end');
    }
    res.end();
    console.log(`${dateRes} * New request has been serviced, statusCode is `, res.statusCode);
});
*/

/*
// Search by endpoint
const server = http.createServer(async (req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`, req.url);
    if (req.method === 'GET') {
        const data = await getDataFromDB();
        const urlObj = new URL(req.url, `http://${req.headers.host}`);
        const pathComponents = urlObj.pathname.split('/');
        const queryObj = Object.fromEntries(urlObj.searchParams);
        console.log(`${dateRes} * urlObj.pathname ${urlObj.pathname}, qurey parameters is`, queryObj, 'pathComponents is', pathComponents);
        if (urlObj.pathname === '/api') {
            sendJSONResponse(res, 200, data[0]);
        } else if ((urlObj.pathname.startsWith('/api/continent/')) || (urlObj.pathname.startsWith('/api/country/'))) {
            if (pathComponents.length === 4) {
                const filteredData = getDataByPathParams(data, pathComponents[2], pathComponents[3]);
                sendJSONResponse(res, 200, JSON.stringify(filteredData));
            } else {
                sendJSONResponse(res, 404, { error: 'not found', message: 'The request route does not exist - continent or country' });
            }
            console.log(pathComponents, 'Search for', pathComponents[pathComponents.length - 1]);
        } else {
            console.log('DIAG *', req.url.slice(0, 14));
            console.log('Default * branch');
            console.log('Default * method', req.method, 'url', req.url); // method GET url /favicon.ico
            console.log('Default * branch end');
            sendJSONResponse(res, 404, { error: 'not found', message: 'The request route does not exist - GEN' });
        }
    } else {
        console.log('The other branch');
        console.log('method', req.method, 'url', req.url); // method not GET
        console.log('The other branch end');
    }
    res.end();
    console.log(`${dateRes} * New request has been serviced, statusCode is `, res.statusCode);
});
*/

/*
// Filter by query params
const server = http.createServer(async (req, res) => {
    const dateRes = new Date();
    console.log(`${dateRes} * New request serviced`, req.url);
    if (req.method === 'GET') {
        const data = await getDataFromDB();
        const urlObj = new URL(req.url, `http://${req.headers.host}`);
        const pathComponents = urlObj.pathname.split('/');
        const queryObj = Object.fromEntries(urlObj.searchParams);
        console.log(`${dateRes} * urlObj.pathname ${urlObj.pathname}, qurey parameters is`, queryObj, 'pathComponents is', pathComponents);
        if (urlObj.pathname === '/api') {
            const filteredData = getDataByQueryParams(data, queryObj); // vulnerable: parameters beyond the scope
            sendJSONResponse(res, 200, filteredData);
        } else {
            console.log('DIAG *', req.url.slice(0, 14));
            console.log('Default * branch');
            console.log('Default * method', req.method, 'url', req.url); // method GET url /favicon.ico
            console.log('Default * branch end');
            sendJSONResponse(res, 404, { error: 'not found', message: 'The request route does not exist - GEN' });
        }
    } else {
        console.log('The other branch');
        console.log('method', req.method, 'url', req.url); // method not GET
        console.log('The other branch end');
    }
    res.end();
    console.log(`${dateRes} * New request has been serviced, statusCode is `, res.statusCode);
});
*/
