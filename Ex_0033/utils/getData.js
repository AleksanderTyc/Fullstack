import path from 'node:path';
import fs from 'node:fs/promises';

async function getData() {
    let dataContent;
    try {
        const dataPath = path.join('data', 'data.json');
        const rawData = await fs.readFile(dataPath, 'utf8');
        const parsedData = JSON.parse(rawData);
        return parsedData;
    }
    catch (err) {
        console.error(err);
        return [];
    }
}

export { getData };

/*
Note how we return JS object (an array with Object(s) as elements) instead of just returning a String with JSON.
Soon we will send these data to the Front End, so we will need to JSON.stringify it back.
But having the data as JS object enables the Back End to do processing on the data (filtering, updating, etc.).
*/
