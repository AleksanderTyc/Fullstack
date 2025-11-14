function getDataByPathParams(data, paramCriterion, paramValue) {
    return data.filter(elem => elem[paramCriterion].toLowerCase() === paramValue.toLowerCase());
}

function getDataByQueryParams(data, qureyObj) {
    return data.filter(elem => {
        let finalResult = true;
        for (const [key, value] of Object.entries(qureyObj)) {
            if( typeof elem[key] === 'string') { // In HTML request they are all String
                finalResult &&= elem[key].toLowerCase() === value.toLowerCase();
            } else {
                finalResult &&= elem[key] === (value.toLowerCase() === 'false'? false : true);
            }
        }
        return finalResult;
    });
}

export { getDataByPathParams, getDataByQueryParams };
