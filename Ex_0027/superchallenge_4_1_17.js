/* Superchallenge 16:16:40 */


function getStockData() {
    return {
        name: 'QTechAI',
        symbol: 'QTA',
        price: function () { return (Math.random() * 3).toFixed(2); },
        time: function () {
            const presentTime = new Date();
            return presentTime.toTimeString().slice(0, 8); // toLocaleTimeString
        }
    };
}

let previousPrice = 0;

function displayTicker() {
    const ticker = getStockData();
    const currPrice = ticker.price();
    const currTime = ticker.time();
    const answer = `
        Name: ${ticker.name}
        Symbol: ${ticker.symbol}
        Price: ${currPrice} ${currPrice < previousPrice ? '🟥' : (currPrice === previousPrice ? '⬜' : '🟩')}
        Time: ${currTime}
    `;
    previousPrice = currPrice;
    return answer;
}

setInterval(() => {
    console.log(displayTicker());
}, 1000);


/*
Official solution presents these as HTML. Green, red and grey icons are images instead of emojis.
There is a <div> container reserved for the icon. The solution:
- creates a new img element:
const priceIconElement = document.createElement("img");
- populates the element:
priceIconElement.src = path To Icon
priceIconElement.alt = 'Price direction icon' // AT: This could be much better
- clears the container's HTML:
stockDisplayPriceIcon.innerHTML = '';
stockDisplayPriceIcon.appendChild( priceIconElement );
*/
