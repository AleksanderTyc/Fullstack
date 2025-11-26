// getTemp

let currTemp = 10;

function updateTemp(minTemp = -30, maxTemp = 50) {
    const changeDir = Math.random() < 0.5 ? -1 : 1;
    currTemp = Math.max(minTemp, Math.min(maxTemp, currTemp + changeDir));
    const dateRes = new Date();
    console.log(`${dateRes} * updateTemp * ${currTemp}, ${changeDir}`);
}

export { currTemp, updateTemp };
