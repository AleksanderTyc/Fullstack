console.log("This is index.js");
let count = 0;
console.log(`Counter is ${count}`);


const increment = () => {
    count += 1;
    document.getElementById("count-el").innerText = count;
}

const save = () => {
    console.log(`Save function * counter is ${count}`);
    let newText = document.getElementById("prev-entr").innerText;
    newText = newText + " " + count + " -";
    document.getElementById("prev-entr").innerText = newText;
    count = 0;
    document.getElementById("count-el").innerText = count;
}
