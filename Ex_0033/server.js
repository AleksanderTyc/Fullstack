import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.write('<html><h1>The server is working</h1></html>');
    res.end();
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
