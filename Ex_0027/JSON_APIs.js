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

// fetch("https://dogs.ceo/api/breeds/image/random") // wrong address
// fetch("https://dog.ceo/api/breeds/image/randomm") // wrong end point
fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {
        if( !response.ok ) {
            throw new Error( `* ERR * response status is ${response.status}, ${response.statusText}`);
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

