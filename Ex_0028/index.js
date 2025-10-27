const generatePassword = (pwdLength) => {
    const alphaRange = 127 - 33;
    let resultChar = 0;
    let resultPassword = "";
    let acceptable = false;
    while (pwdLength-- > 0) {
        acceptable = false;
        while (!acceptable) {
            resultChar = Math.floor(Math.random() * alphaRange) + 33;
            [34, 35, 39, 92].map((elem) => { acceptable |= (elem === resultChar); });
            acceptable = !acceptable;
        }
        resultPassword += String.fromCharCode(resultChar);
    }
    return resultPassword;
}

const generatePwds = () => {
    document.getElementById("passwd-1").textContent = generatePassword(15);
    document.getElementById("passwd-2").textContent = generatePassword(15);
    document.getElementById("passwd-1").style.color = "#eb5e28";
    document.getElementById("passwd-2").style.color = "#eb5e28";
}

const pwdClicked = (elem) => {
    // Source:
    // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

    // Get the text value
    var copyText = document.getElementById("passwd-" + elem).textContent;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);
}