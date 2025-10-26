let card = 0;
let sum = 0;
let hasBlackjack = false;
let isAlive = true;

let player = {
    name: "Per",
    chips: 14
}
document.getElementById("player-el").textContent = player.name + ": " + player.chips;

const getBlackjackCard = () => {
    const randomCard = Math.floor(Math.random() * 13) + 2;
    return randomCard > 11 ? 10 : randomCard;
}

const startGame = () => {
    console.log("startGame clicked");
    document.getElementById("cards-el").textContent = "Cards:";
    document.getElementById("sum-el").textContent = "Sum:";
    card = 0;
    sum = 0;

    hasBlackjack = false;
    if (player.chips > 0) {
        isAlive = true;
        player.chips -= 1;
        renderGame();
    } else {
        isAlive = false;
        document.getElementById("message-el").textContent = "No chips left!";
    }

    if( isAlive === false ) { return; }
    
    // card = Math.floor(Math.random() * 10) + 2; // 2-11
    card = getBlackjackCard();
    sum += card;
    presentCard();
    // card = Math.floor(Math.random() * 10) + 2; // 2-11
    card = getBlackjackCard();
    sum += card;
    presentCard();

}

const renderGame = () => {
    console.log("renderGame clicked");

    if (sum < 21) {
        messageEl = "Do you want to draw another card?";
    } else if (sum === 21) {
        hasBlackjack = true;
        messageEl = "You've got Blackjack!";
    } else {
        isAlive = false;
        messageEl = "You're out of the game!";
    }

    if (hasBlackjack) {
            player.chips += 2;
    }

    console.log(`Sum: ${sum} ${messageEl} hasBlackjack: ${hasBlackjack} isAlive: ${isAlive}`);
    document.getElementById("message-el").textContent = messageEl;
    document.getElementById("player-el").textContent = player.name + ": " + player.chips;
}

const newCard = () => {
    console.log("newCard clicked");
    if ((isAlive === false) || (hasBlackjack === true)) { return; }
    // card = Math.floor(Math.random() * 10) + 2; // 2-11
    card = getBlackjackCard();
    sum += card;
    presentCard();
    renderGame();
}

function presentCard() {
    // const presentCard = () => {
    document.getElementById("cards-el").textContent += " ".concat(card);
    document.getElementById("sum-el").textContent = "Sum: ".concat(sum);
}
// renderGame();

/* Side - task */
/*
function airbnbCastle () {
    const myListing = {
        myBoolean: true,
        myString: "My Castle",
        myNumber: "17",
        myArray: ["May", "August", "December"]
    }
    console.log( `Castle Logging: myBoolean is ${myListing.myBoolean}`);
    console.log( `Castle Logging: myString is ${myListing.myString}`);
    console.log( `Castle Logging: myNumber is ${myListing.myNumber}`);
    console.log( `Castle Logging: myArray is ${myListing.myArray}`);
}

console.log( "Calling airbnbCastle");
airbnbCastle();
console.log( "Calling airbnbCastle - end");
*/
