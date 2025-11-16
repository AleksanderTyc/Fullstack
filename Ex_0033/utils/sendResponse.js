function sendResponse(res, contentType, statusCode, payload) {
    res.setHeader('Content-Type', contentType);
    res.statusCode = statusCode;
    res.write(payload);
}

export { sendResponse };
