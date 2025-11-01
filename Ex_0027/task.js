/* Person object */
console.log("This is task");

const personObj = {
    name: "Alex",
    age: 51,
    country: "Poland"
}

const logData = (arg) => { return `${arg.name} is ${arg.age} years old and lives in ${arg.country}`; }

console.log(logData(personObj));


/* Discount */
const detDiscount = (age) => {
    if( age < 6 ) return "free";
    if( age < 18 ) return "child discount";
    if( age < 27 ) return "student discount";
    if( age < 67 ) return "full price";
    return "senior citizen discount";
}

for (let index = 5; index < 75; index+=5){
    console.log( `Age is ${index}, discount: ${detDiscount(index)}`);
}

/* Large countries */
const largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
largeCountries.map((elem,index) => {console.log(`- ${index}: ${elem}`);});

/* Large countries - broken */
let largeCountriesB = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
console.log( `largeCountriesB start: ${largeCountriesB}`);
largeCountriesB.pop();
console.log( `largeCountriesB remove Monaco: ${largeCountriesB}`);
largeCountriesB.push("Pakistan")
console.log( `largeCountriesB add Pakistan: ${largeCountriesB}`);
largeCountriesB.shift();
console.log( `largeCountriesB remove Tuvalu: ${largeCountriesB}`);
largeCountriesB.unshift("China");
console.log( `largeCountriesB add China: ${largeCountriesB}`);

/* Generate Sentence */
function generateSentence(desc, arr) {
    return `The ${arr.length} ${desc} ${arr.length > 1 ? "are" : "is"} ${arr}`;
}
console.log(generateSentence("largest countries", ["China", "India", "USA"]));
console.log(generateSentence("best fruits", ["Apples", "Bananas"]));
console.log(generateSentence("best fruit", ["Bananas"]));
