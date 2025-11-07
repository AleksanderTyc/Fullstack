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
    if (age < 6) return "free";
    if (age < 18) return "child discount";
    if (age < 27) return "student discount";
    if (age < 67) return "full price";
    return "senior citizen discount";
}

for (let index = 5; index < 75; index += 5) {
    console.log(`Age is ${index}, discount: ${detDiscount(index)}`);
}

/* Large countries */
const largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
largeCountries.map((elem, index) => { console.log(`- ${index}: ${elem}`); });

/* Large countries - broken */
let largeCountriesB = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
console.log(`largeCountriesB start: ${largeCountriesB}`);
largeCountriesB.pop();
console.log(`largeCountriesB remove Monaco: ${largeCountriesB}`);
largeCountriesB.push("Pakistan")
console.log(`largeCountriesB add Pakistan: ${largeCountriesB}`);
largeCountriesB.shift();
console.log(`largeCountriesB remove Tuvalu: ${largeCountriesB}`);
largeCountriesB.unshift("China");
console.log(`largeCountriesB add China: ${largeCountriesB}`);

/* Generate Sentence */
function generateSentence(desc, arr) {
    return `The ${arr.length} ${desc} ${arr.length > 1 ? "are" : "is"} ${arr}`;
}
console.log(generateSentence("largest countries", ["China", "India", "USA"]));
console.log(generateSentence("best fruits", ["Apples", "Bananas"]));
console.log(generateSentence("best fruit", ["Bananas"]));

/* Rounding number */
let totalPrice = 420.69235;
let roundedPrice = `Buy EUR ${totalPrice.toFixed(2)}`;
console.log(`${totalPrice}, ${roundedPrice}`);
totalPrice = 420.69635;
roundedPrice = `Buy EUR ${totalPrice.toFixed(2)}`;
console.log(`${totalPrice}, ${roundedPrice}`);

/* Red Light Green Light */
console.log(String.fromCharCode(65)); // A
console.log('🔴');
console.log(String.fromCodePoint(0x1F534)); // Red Circle 🔴 U+1F534
console.log(String.fromCodePoint(0x1F7E2)); // Green Circle 🟢 U+1F7E2

function displayTrafficLight(light) {
    console.log(light);
}

// setTimeout(() => { displayTrafficLight('🟢'); }, 3000);
displayTrafficLight('🔴');

function logAnswer(answer, points) {
    console.log(`
        The answer is ${answer} of course!
        If you got that right, give yourself ${points} points.
        `);
}
// setTimeout(logAnswer, 3000, "Peru", 10 );
// setTimeout(() => { logAnswer("Peru", 10); }, 3000); // Same thing, no extra arguments passed to setTimeout.
console.log("What is the capital of Peru?");
logAnswer("Peru", 10);

// How to cancel an existing, unexpired (unresolved?) Timeout?
const PeruTimeout = setTimeout(() => { logAnswer("Peru", 10); }, 4000); // Will show 1 second after the above, unless cancelled.
clearTimeout(PeruTimeout);

/* Date */
const dateSnapshot = new Date();
console.log(dateSnapshot); // weird colour
console.log(dateSnapshot.toString());
console.log(dateSnapshot.getFullYear()); // weird colour
console.log(dateSnapshot.getFullYear().toString()); // standard colour

/* Error */
function checkUsername(uName) {
    if (uName) {
        console.log(uName);
    } else {
        // throw new Error('No user name provided');
        console.log(new Error('No user name provided'));
    }
}

checkUsername('funnyMongrel');
checkUsername();
checkUsername('anaStasia');


/* Hoisting */
console.log( beforeInit ); // not defined vs cannot access before initialisation
let beforeInit = 'Here I am'; // cannot access before initialisation
// var beforeInit = 'Here I am'; // undefined


/* Performance */
const start = performance.now();
// some shit taking long time to run
const end = performance.now();
console.log( `Execution time ${end-start} milliseconds`);
