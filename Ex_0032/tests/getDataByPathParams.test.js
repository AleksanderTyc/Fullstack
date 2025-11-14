import { getDataByPathParams } from '../utils/getDataByPathParams.js';
import { getDataFromDB } from '../dbase/db.js';

import test from 'node:test';
import assert from 'node:assert';

test( '1. It returns data filtered by continent - Africa', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => elem.continent.toLowerCase() === 'africa');
    const result = getDataByPathParams(data, 'continent','Africa');
    // console.log( `*** filteredData is`, filteredData );
    // console.log( `*** result is`, result );
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test( '2. It returns data filtered by country - China', async () => {
    const dateTest = new Date();
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => elem.country.toLowerCase() === 'china');
    const result = getDataByPathParams(data, 'country','China');
    console.log( `* ${dateTest} *** filteredData is`, filteredData );
    console.log( `* ${dateTest} *** result is`, result );
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test( '10.1. It returns data filtered by continent - Oceania', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => elem.continent.toLowerCase() === 'oceania');
    const result = getDataByPathParams(data, 'continent','Oceania');
    // console.log( `*** filteredData is`, filteredData );
    // console.log( `*** result is`, result );
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

