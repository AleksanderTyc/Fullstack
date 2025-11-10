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
