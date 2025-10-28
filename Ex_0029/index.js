let myLeads = [];
const inputEl = document.getElementById("input-el");

function saveInput() {
    console.log("saveInput clicked");
    console.log(`inputEl value is ${inputEl.value}`);
    if( inputEl.value.length > 0 ) { myLeads.push(inputEl.value); }
    console.log(`myLeads value is ${myLeads}`);
}

document.getElementById("input-btn").addEventListener("click",saveInput);
