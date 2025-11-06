/* Export Import */
// const { interDestsArr, localDestsArr } = require('./destinations.js');
// const { getMatchingDests } = require('./getMatchingDests.js');
import { interDestsArr, localDestsArr } from './destinations.mjs';
import { getMatchingDests } from './getMatchingDests.mjs';
console.log(`interDestsArr is ${interDestsArr}, localDestsArr is ${localDestsArr}`);
console.log(`interDestsArr[0] is ${interDestsArr[0]}, localDestsArr[1] is ${localDestsArr[1]}`);

console.log(getMatchingDests(interDestsArr, 'exotic'));
console.log(getMatchingDests(localDestsArr, 'exotic'));
