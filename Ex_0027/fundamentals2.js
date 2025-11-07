
/* Which of the 3 definitions will work with thic invocation? */
// console.log(getSpendAlert(10));

/* OK - Hoisting standard */
// function getSpendAlert(amount) {
//     return `Warning *** You just spent ${amount}!`;
// }

/* Cannot access before initialisation */
// const getSpendAlert = function (amount) {
//     return `Warning *** You just spent ${amount}!`;
// }

/* Cannot access before initialisation */
// const getSpendAlert = (amount) => {
//     return `Warning *** You just spent ${amount}!`;
// }

/* The above syntax is equivalent to */
// const getSpendAlert = amount => `Warning *** You just spent ${amount}!`;
/* This is because:
    1. We have exactly one parameter.
    2. The only expression calculated in the function is the returned value.
*/

/* This works for all of them */
// console.log(getSpendAlert(10));

// const speedWarning = speed => `You are going at ${speed} mph!`;
console.log('speedWarning');
const speedWarning = (speedLimit, speedActual) => speedLimit < speedActual ? `You are going at ${speedActual} mph!` : '';
console.log(speedWarning(50, 40)); // Empty line
console.log(speedWarning(30, 40));

console.log('distanceTravelled');
const distanceTravelledMiles = [267, 345, 234, 190, 299];
const distanceTravelledKm = distanceTravelledMiles.map(distance => Math.round(distance * 1.601));
console.log(distanceTravelledKm);


console.log('Total distance');
const { interDestsArr, localDestsArr } = require('./destinations.js');
function calculateTotalDistance(destArray) {
    // This does not work, because the array elements are not numbers.
    // const total = destArray.reduce((runTot, runCurr) => runTot+runCurr.distanceKM);
    // We have to explicitly provide the initial value, as per documentation:
    // Normally, array element 0 is used as initial value, and the iteration starts from array element 1.
    // If an initial value is supplied, this is used, and the iteration starts from array element 0.
    const total = destArray.reduce((runTot, runCurr) => runTot + runCurr.distanceKM, 0);
    return total;
}
// This would work with the first attempt - calling reduce without initial value.
// console.log( `distanceTravelledKm: ${calculateTotalDistance(distanceTravelledKm)}`);
console.log(`interDestsArr: ${calculateTotalDistance(interDestsArr)}`);
console.log(`localDestsArr: ${calculateTotalDistance(localDestsArr)}`);


/* Challenge - thank you */
function getLabelsHTML(text, sender, ...recipients) {
    let labelHTML = '';
    recipients.forEach((recipient) => labelHTML +=
        `<div class="label-card">
    <p>Dear ${recipient.name} </p>
    <p>${text}</p>
    <p>Best wishes,</p>
    <p>${sender}</p>
</div>
`);
    return labelHTML;
}
console.log(getLabelsHTML(
    'Thank you for your hard work',
    'Tom',
    { name: 'Sally' },
    { name: 'Mike' },
    { name: 'Rob' },
    { name: 'Chris' }
));
// Alternatively:
// return recipients.map(...).join('');
// We convert each recipient into the block of HTML, map returns an array.
// Then we use join with empty joining string to convert the array to a single string, which is returned.
