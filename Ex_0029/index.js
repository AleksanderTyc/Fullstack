// chrome://extensions/

/*
localStorage.length
localStorage.key(0,...,length)
localStorage.getItem(key)
localStorage.removeItem(key)
localStorage.clear()
localStorage.setItem(key,value)
*/

let myLeads = JSON.parse(localStorage.getItem("myLeads"));
console.log(`${typeof myLeads}, ${myLeads}`);
if (myLeads === null) {
    myLeads = [];
}

const inputEl = document.getElementById("input-el");

const ulEl = document.getElementById("ul-el");
console.log(ulEl);

function saveInput() {
    console.log("saveInput clicked");
    console.log(`inputEl value is ${inputEl.value}`);
    if (inputEl.value.length > 0) {
        myLeads.push(inputEl.value);
        // myLeads = inputEl.value;
        inputEl.value = "";
    }
    renderMyLeads();
}

function saveLeadsToStorage() {
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    console.log(`saveLeadsToStorage clicked, new length is ${localStorage.length}`);
}

function renderMyLeads() {
    // Easier to see what is going on
    // ulEl.innerHTML += `<li>${inputEl.value}</li>`;
    // ulEl.innerHTML += `
    //     <li>
    //         <a target="_blank" href="https://${inputEl.value}">${inputEl.value}</a>
    //     </li>
    // `;
    // Same thing, but using document createElement and append methods
    // const listItem = document.createElement("li");
    // listItem.textContent = inputEl.value;
    // ulEl.append(listItem);


    ulEl.innerHTML = "";
    myLeads.map((elem, indx) => {
        console.log(`${indx}. ${elem}`);
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a target="_blank" href="https://${elem}">${elem}</a>`;
        ulEl.append(listItem);
    });
    // const listItem = document.createElement("li");
    // listItem.innerHTML = `<a target="_blank" href="https://${myLeads}">${myLeads}</a>`;
    // ulEl.append(listItem);
}

function saveTab() {
    // const tabs = [{ url: "https://www.linkedin.com/in/aleksander-tyc-2b83b6199/" }];
    chrome.tabs.query(
        { active: true, currentWindow: true },
        function (tabs) {
            myLeads.push(tabs[0]["url"]);
            renderMyLeads();
        }
    );
}

function clearMyLeads() {
    localStorage.removeItem("myLeads");
    myLeads = [];
    renderMyLeads();
}

document.getElementById("input-btn").addEventListener("click", saveInput);
document.getElementById("save-btn").addEventListener("click", saveLeadsToStorage);
document.getElementById("tab-btn").addEventListener("click", saveTab);
document.getElementById("clear-btn").addEventListener("dblclick", clearMyLeads);
renderMyLeads();

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
