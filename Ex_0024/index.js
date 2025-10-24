let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

const add = () => {
    // document.getElementById("sum-el").textContent += (" " + (num1 + num2));
    document.getElementById("sum-el").textContent = "Sum:" + " " + (num1 + num2);
}

const subtract = () => {
    document.getElementById("sum-el").textContent = "Sum:" + " " + (num1 - num2);
}

const multiply = () => {
    document.getElementById("sum-el").textContent = "Sum:" + " " + (num1 * num2);
}

const divide = () => {
    document.getElementById("sum-el").textContent = "Sum:" + " " + (num1 / num2);
}
