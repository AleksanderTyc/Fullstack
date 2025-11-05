// totalPrice.toFixed(3);
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kg = 2.204 pound
*/


function convertUnits() {
    const valueHeroInputNum = Number(document.getElementById("hero-input").value);
    const pLengthHTML = valueHeroInputNum ?
        `${valueHeroInputNum} meters = ${(valueHeroInputNum * 3.281).toFixed(3)} feet | ${valueHeroInputNum} feet = ${(valueHeroInputNum / 3.281).toFixed(3)} meters`
        : "Input is not a number";
    document.getElementById("p-length").innerHTML = pLengthHTML;
    document.getElementById("p-length").style.color = "#000";
    const pVolumeHTML = valueHeroInputNum ?
        `${valueHeroInputNum} liters = ${(valueHeroInputNum * 0.264).toFixed(3)} gallon | ${valueHeroInputNum} gallon = ${(valueHeroInputNum / 0.264).toFixed(3)} liters`
        : "Input is not a number";
    document.getElementById("p-volume").innerHTML = pVolumeHTML;
    document.getElementById("p-volume").style.color = "#000";
    const pMassHTML = valueHeroInputNum ?
        `${valueHeroInputNum} kilograms = ${(valueHeroInputNum * 2.204).toFixed(3)} pound | ${valueHeroInputNum} pound = ${(valueHeroInputNum / 2.204).toFixed(3)} kilograms`
        : "Input is not a number";
    document.getElementById("p-mass").innerHTML = pMassHTML;
    document.getElementById("p-mass").style.color = "#000";
}
