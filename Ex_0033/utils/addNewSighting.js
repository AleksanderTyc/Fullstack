import path from 'node:path';
import fs from 'node:fs/promises';
import { getData } from "./getData.js";

async function addNewSighting(parsedBody) {
    try {
        // Get current data
        const currData = await getData();
        // Push new data to current data array
        currData.push(parsedBody);
        // Write new collated data to the file
        // - Import fs/promises
        // - writeFile - relative path, data, encoding utf8
        await saveData(currData);
    }
    catch(err) {
        throw new Error(`Error adding new sighting ${err}`);

    }
}

async function saveData(parsedData) {
    let dataContent;
    try {
        const dataPath = path.join('data', 'data.json');
        // await fs.writeFile(dataPath, JSON.stringify(parsedData), 'utf8');
        await fs.writeFile(dataPath, JSON.stringify(parsedData, null, 2), 'utf8'); // prettify
    }
    catch (err) {
        console.error(err);
    }
}


export { addNewSighting };
