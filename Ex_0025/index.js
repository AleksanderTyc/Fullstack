let homeScore = 0;
let guestScore = 0;

const updateScores = () => {
    document.getElementById("score-h").textContent = homeScore;
    document.getElementById("score-g").textContent = guestScore;
    // Future placeholder - mark the winner
}

const changeScore = (gOrH, howMuch) => {
    gOrH === "G" ? guestScore += howMuch : homeScore += howMuch;
    updateScores();
}

const resetScores = () => {
    homeScore = 0;
    guestScore = 0;
    updateScores();
}
