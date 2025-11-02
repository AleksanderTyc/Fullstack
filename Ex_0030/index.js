// totalPrice.toFixed(3);
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kg = 2.204 pound
*/


function convertUnits() {
    const valueHeroInput = document.getElementById("hero-input").value;
    const valueHeroInputNum = Number(valueHeroInput);
    const pLengthHTML = valueHeroInputNum ?
        `${valueHeroInput} meters = ${(valueHeroInput * 3.281).toFixed(3)} feet | ${valueHeroInput} feet = ${(valueHeroInput / 3.281).toFixed(3)} meters`
        : "Input is not a number";
    document.getElementById("p-length").innerHTML = pLengthHTML;
    document.getElementById("p-length").style.color = "#000";
}
