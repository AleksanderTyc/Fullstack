async function parseJSONBody(req) {
    let message = '';
    // Documentation on for ... of ...
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
    // See also for ... of and for ... in for better understanding
    
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
