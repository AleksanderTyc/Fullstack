let firstCard = 10;
let secondCard = 11;

let sum = firstCard +secondCard;

let hasBlackjack = false;
let isAlive = true;
let message = "";

if( sum < 21) {
message = "Do you want to draw another card?";
} else if( sum === 21) {
    hasBlackjack = true;
    message = "You've got Blackjack!";
} else {
    isAlive = false;
    message = "You're out of the game!";
}

console.log(`Sum: ${sum} ${message} hasBlackjack: ${hasBlackjack} isAlive: ${isAlive}`);
