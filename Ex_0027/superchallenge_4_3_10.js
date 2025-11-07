/* Super challenge - Property HTML */

const { placeholderPropertyObj } = require('./properties/placeholderPropertyObj.js');
const { propertyForSaleArr } = require('./properties/propertyForSaleArr.js');


function getPropertyHTML(propertyArr = placeholderPropertyObj) {
    return propertyArr.map(
        property => {
            const { propertyLocation, priceGBP, roomsM2, comment, image } = property;
            const totalSize = roomsM2.reduce( (totSize, curSize) => totSize+curSize, 0 );
            return `
<section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${totalSize}</h3>
    </div>
</section>
`;
        }
    ).join(' ');
}

// const templateHTML = `
// <section class="card">
//     <img src="/images/${IMAGE}">
//     <div class="card-right">
//         <h2>${PRPERTYLOCATION}</h2>
//         <h3>${PRICE}</h3>
//         <p>${COMMENT}</p>
//         <h3>${TOTALSIZE}</h3>
//     </div>
// </section>
// `;

console.log('No parameters passed');
console.log(getPropertyHTML());
console.log('propertyForSaleArr passed');
console.log(getPropertyHTML(propertyForSaleArr));


/* Rubbish */
/*
    return propertyArr.map(
        property => {
            const { propertyLocation, priceGBP, roomsM2, comment, image } = property;
            const totalSize = roomsM2.reduce( (totSize, curSize) => totSize+curSize, 0 );
            return
`
<section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${totalSize}</h3>
    </div>
</section>
`;
        }
    ).join(' ');
*/
