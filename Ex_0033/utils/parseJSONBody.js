async function parseJSONBody(req) {
    let message = '';
    for await (const chunk of req) {
        message += chunk;
    }

    try {
        return JSON.parse(message);
    }
    catch (err) {
        throw new Error(`Invalid JSON format: ${err}`);
    }
}

export { parseJSONBody };
