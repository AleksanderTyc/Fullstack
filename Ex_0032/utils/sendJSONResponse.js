export function sendJSONResponse(res, statusCode, payload) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = statusCode;
    res.write(JSON.stringify(payload));
}
