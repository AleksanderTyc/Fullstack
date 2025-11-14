export function getDataByPathParams(data, paramCriterion, paramValue) {
    return data.filter(elem => elem[paramCriterion].toLowerCase() === paramValue.toLowerCase());
}
