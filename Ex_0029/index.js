let myLeads = [];
const inputEl = document.getElementById("input-el");

const ulEl = document.getElementById("ul-el");
console.log(ulEl);

function saveInput() {
    console.log("saveInput clicked");
    console.log(`inputEl value is ${inputEl.value}`);
    if (inputEl.value.length > 0) {
        myLeads.push(inputEl.value);
        // Easier to see what is going on
        // ulEl.innerHTML += `<li>${inputEl.value}</li>`;
        ulEl.innerHTML += `
            <li>
                <a target="_blank" href="https://${inputEl.value}">${inputEl.value}</a>
            </li>
        `;
        // Same thing, but using document createElement and append methods
        // const listItem = document.createElement("li");
        // listItem.textContent = inputEl.value;
        // ulEl.append(listItem);
        inputEl.value = "";
    }
    console.log(`myLeads line by line:`);
    myLeads.map((elem, indx) => {
        console.log(`${indx}. ${elem}`);
    });
    console.log(`myLeads line by line end`);
}

document.getElementById("input-btn").addEventListener("click", saveInput);

/* Side problem */
/*
const containerEl = document.getElementById("container-el");
function buyFunc () {
    console.log( `Buy clicked, container inner HTML before: ${containerEl.innerHTML}`);
    containerEl.innerHTML += "<p>Thank you for buying!</p>";
    // console.log( "<p>Thank you for buying!</p>");
    console.log( `Buy clicked, container inner HTML after: ${containerEl.innerHTML}`);
};
// Original syntax - each time Buy is clicked, we get a new paragraph.
containerEl.innerHTML = "<button id='buy-btn' onclick='buyFunc()'>Buy!</button>";
// My syntax - when Buy is clicked, event listener is detached from button, but I don't know why.
containerEl.innerHTML = "<button id='buy-btn'>Buy!</button>"; //
const buyBtn = document.getElementById("buy-btn");
buyBtn.addEventListener("click", buyFunc);
*/
