let card = 0;
let sum = 0;
let hasBlackjack = false;
let isAlive = true;

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

    // card = Math.floor(Math.random() * 10) + 2; // 2-11
    card = getBlackjackCard();
    sum += card;
    presentCard();
    // card = Math.floor(Math.random() * 10) + 2; // 2-11
    card = getBlackjackCard();
    sum += card;
    presentCard();


    // let firstCard = Math.floor( Math.random() *10 ) +2; // 2-11
    // let secondCard = Math.floor( Math.random() *10 ) +2; // 2-11

    hasBlackjack = false;
    isAlive = true;

    renderGame();
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

    console.log(`Sum: ${sum} ${messageEl} hasBlackjack: ${hasBlackjack} isAlive: ${isAlive}`);
    document.getElementById("message-el").textContent = messageEl;
}

const newCard = () => {
    console.log("newCard clicked");
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
