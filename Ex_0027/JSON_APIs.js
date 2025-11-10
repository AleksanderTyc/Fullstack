// fetch("https://dog.ceo/api/breeds/list/all")
/*
fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => console.log(data));


fetch('https://bored-api.appbrewery.com/random')
    .then(response => response.json())
    .then(data => console.log(data));
    
fetch('https://bored-api.appbrewery.com/activity')
    .then(data => console.log(data));

fetch('https://bored-api.appbrewery.com/activity')
    .then((data, reject) => console.log(`data ${data}, reject ${reject}`));
*/

/*
// fetch("https://dogs.ceo/api/breeds/image/random") // wrong address
// fetch("https://dog.ceo/api/breeds/image/randomm") // wrong end point
fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        if (!response.ok) {
            throw new Error(`* ERR * response status is ${response.status}, ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => {
        console.log(`*** Error handling *** ${err}`);
        // Update DOM to warn the user
        // Try alternative source
    })
    .finally(() => console.log("All done"))
    ;
*/

/*
fetch("https://jsonplaceholder.typicode.com/posts", { method: 'GET' }) // GET is default
    .then(response => response.json())
    .then(data => console.log(data))
    ;

fetch("https://jsonplaceholder.typicode.com/posts", { method: 'GET' }) // GET is default
    .then(response => response.json())
    .then(data => {
        const resData = data.filter((elem) => elem.id === 99);
        console.log(resData);
    })
    ;

fetch("https://jsonplaceholder.typicode.com/posts", { method: 'GET' }) // GET is default
    .then(response => console.log(response))
    ;

*/

/*
// POST and PUT requests require body parameter
// headers is required to ensure that the server correctly processes the POST request.
// Then instead of just responding with id:101, it will send back the entire record.
fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            title: 'Holiday nightmares',
            body: 'When I was kidnapped in Scotland...',
            userId: 10142
        })
    }
)
    .then(response => {
        if (!response.ok) {
            throw new Error(`* ERR * POST to placeholder failed, status is ${response.status}, ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(`*** ERROR *** While processing promise * ${err}`))
    .finally(() => console.log("fetch POST complete"))
    ;
*/

/*
const promise = new Promise(
    (resolve, reject) => {
        const success = Math.random() < 0.5;
        if (success) {
            resolve('Operation successful');
        } else {
            reject('Operation failed'); // Note that this throws an error, so it requires `catch` to be processed.
        }
    }
);

promise
    .then( response => console.log(response))
    .catch(err => console.log(`* ERR * ${err}`))
    ;
*/

/* Lesson 14 19:27:56 Image promise */
/* Best executed from Chrome console */
/* Bardzo irytujące - tego nie było wcześniej
Dokumentacja
https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement
wspomina, że createElement("img") oraz new Image() tworzą tego samego typu obiekt (HTMLImageElement).
Strona wspomina o decode, być może to jest właściwa metoda sprawdzania kiedy img się załaduje.
Strona nie wspomina o load ani error events, tylko onerror. Inne strony
https://stackoverflow.com/questions/6241716/is-there-a-difference-between-new-image-and-document-createelementimg
wspominają o onload.
Strona wspomina o tym, że ten element jest potomkiem EventTarget.
Strona
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
wskazuje, że addEventListener jest właściwą metodą nasłuchiwania events dla obiektów EventTarget,
znacznie lepszą niż .onXYZ. Z kolei HTML <element onevent="functionToCall()"> jest stanowczo niezalecana.
*/
/*
function preLoadImg(url) {
    return new Promise(
(resolve, reject) => {
    const img = new Image();
    img.alt = 'Beautiful image';
    img.src = url;
    img.addEventListener('load', () => resolve(img));
    img.addEventListener('error', () => reject('img has NOT loaded'));

    const priceIconElement = document.createElement("img");
    // priceIconElement.src = "/home/aleks/Archiwum/DataScientist/Fullstack/repository/Ex_0029/icon.png";
    priceIconElement.src = url;
    priceIconElement.alt = 'Icon description';
    // console.log(priceIconElement);
    if( godKnowsWhat ) {
        resolve(priceIconElement);
    } else {
        reject('img has NOT loaded')
    }
    
}
    );
}

try {
    const results = await preLoadImg("/home/aleks/Archiwum/DataScientist/Fullstack/repository/Ex_0029/icon.png");
    console.log(results);
    // document.getElementById("...").appendChild(results);
}
catch (err) {
    console.error(err);
}
*/

/* Streamlining promises 19:31:21 */
/*
function uploadFile() {
    return new Promise(
        (resolve, reject) => {
            console.log('Step 1. Uploading file...');
            setTimeout(() => resolve(), 1000);
        }
    );
}
function processFile() {
    return new Promise(
        (resolve, reject) => {
            console.log('Step 2. Processing file...');
            setTimeout(() => resolve(), 1000);
        }
    );
}
function notifyUser() {
    return new Promise(
        (resolve, reject) => {
            console.log('Step 3. Notifying user...');
            setTimeout(() => resolve(), 1000);
        }
    );
}

// My way
const p1 = uploadFile();
p1.then(() => processFile()).then(() => notifyUser()).finally(() => console.log("All steps completed"));

// Their way
try {
    const p1 = await uploadFile();
    const p2 = await processFile();
    const p3 = await notifyUser();
}
catch (err) {
    console.error(err);
}
finally {
    console.log("All steps completed");
}
*/

/* Promise.all 19:34:18 */
/*
function makeWish() {
    return new Promise(
        (resolve, reject) => {
            const success = Math.random() < 0.5;
            if (success) {
                resolve('Operation successful');
            } else {
                reject('Operation failed'); // Note that this throws an error, so it requires `catch` to be processed.
            }
        }
    );
}

const p1 = makeWish();
const p2 = makeWish();
const p3 = makeWish();

const p = Promise.all([p1, p2, p3]);
p
    .then(response => console.log(response)) // Note that response is an Array
    .catch(err => console.log(`* ERR * ${err}`))
    ;

// Their way:
try {
    const p1 = makeWish();
    const p2 = makeWish();
    const p3 = makeWish();
    const p = await Promise.all([p1, p2, p3]);
    console.log(p);
}
catch (err) {
    console.log(`* ERR * ${err}`);
}
*/

/* Superchallenge Async image load 19:36:29 - theoretical only */
/*
// My attempt:
async function preLoadImages(imageURLsArr) {
    const imgContainer = document.getElementById('img-container');
    const uploadContainer = document.getElementById('upload-container');

    const promisesArr = Promise.all(imageURLsArr.map((elem => getImagePromise(elem))));
    promisesArr
        .then(results => {
            console.log("All images loaded successfully!");
            uploadContainer.visibility = hidden; // Their: uploadContainer.style.visibility = 'none';
            results.forEach(element => {
                imgContainer.appendChild(element);
            });
        })
        .catch(err => console.error(err))
        ;
}
So fucking proud of myself!
*/
