let myLeads = [];
const inputEl = document.getElementById("input-el");

const ulEl = document.getElementById("ul-el");
console.log(ulEl);

function saveInput() {
    console.log("saveInput clicked");
    console.log(`inputEl value is ${inputEl.value}`);
    if (inputEl.value.length > 0) {
        myLeads.push(inputEl.value);
        ulEl.innerHTML += `<li>${inputEl.value}</li>`;
    }
    console.log(`myLeads line by line:`);
    myLeads.map((elem, indx) => {
        console.log(`${indx}. ${elem}`);
    });
    console.log(`myLeads line by line end`);
}

document.getElementById("input-btn").addEventListener("click", saveInput);
