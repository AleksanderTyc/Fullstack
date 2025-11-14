import { getDataByQueryParams } from '../utils/getDataByPathParams.js';
import { getDataFromDB } from '../dbase/db.js';

import test from 'node:test';
import assert from 'node:assert';

test('1. It returns entire data unfiltered when queryObj is empty', async () => {
    // const dateTest = new Date();
    const data = await getDataFromDB();
    const filteredData = data;
    const result = getDataByQueryParams(data, {});
    // console.log( `* ${dateTest} *** filteredData is`, filteredData );
    // console.log( `* ${dateTest} *** result is`, result );
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});


test('2.1. It returns data filtered by is_open_to_public true', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => elem.is_open_to_public);
    const result = getDataByQueryParams(data, { is_open_to_public: 'true' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test('2.2. It returns data filtered by is_open_to_public false', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => !elem.is_open_to_public);
    const result = getDataByQueryParams(data, { is_open_to_public: 'false' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});


test( '3.1. It returns data filtered by country - USA', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => elem.country.toLowerCase() === 'usa');
    const result = getDataByQueryParams(data, { country: 'USA' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test( '3.2. It returns data filtered by country - China', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => elem.country.toLowerCase() === 'china');
    const result = getDataByQueryParams(data, { country: 'cHina' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test( '4. It returns data filtered by continent - Africa', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => elem.continent.toLowerCase() === 'africa');
    const result = getDataByQueryParams(data, { continent: 'Africa' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test( '5.1. It returns data filtered by continent: Africa and is_open_to_public: false', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => ((elem.continent.toLowerCase() === 'africa') && (!elem.is_open_to_public)) );
    const result = getDataByQueryParams(data, { is_open_to_public: 'false', continent: 'Africa' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test( '5.2. It returns data filtered by continent: Asia and is_open_to_public: false', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => ((elem.continent.toLowerCase() === 'asia') && (!elem.is_open_to_public)) );
    const result = getDataByQueryParams(data, { is_open_to_public: 'false', continent: 'Asia' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test( '5.3. It returns data filtered by continent: Africa and is_open_to_public: true', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => ((elem.continent.toLowerCase() === 'africa') && (elem.is_open_to_public)) );
    const result = getDataByQueryParams(data, { is_open_to_public: 'true', continent: 'Africa' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test( '5.4. It returns data filtered by continent: Oceania and country: New Zealand and is_open_to_public: true', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => ((elem.country.toLowerCase() === 'new zealand') && (elem.continent.toLowerCase() === 'oceania') && (elem.is_open_to_public)) );
    const result = getDataByQueryParams(data, { country: 'New Zealand', is_open_to_public: 'true', continent: 'Oceania' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

test( '10.1. It returns data filtered by continent - Oceania', async () => {
    const data = await getDataFromDB();
    const filteredData = data.filter(elem => elem.continent.toLowerCase() === 'oceania');
    const result = getDataByQueryParams(data, { continent: 'Oceania' });
    assert.deepStrictEqual(result, filteredData); // deep required for comparing arrays and other objects
});

