import React from "react";

function Main(params) {

    const [meme, setMeme] = React.useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    });

    const [memeArray, setMemeArray] = React.useState([]);
    React.useEffect(
        () => {
            fetch('https://api.imgflip.com/get_memes')
                .then(response => response.json())
                .then(data => setMemeArray(data.data.memes));
        },
        []
    );
    // How to receive not just the updated value of the component, which triggerred the event,
    // but also the name of the component itself?
    function handleChange(event) {
        const { value, name } = event.currentTarget; // updated value of the component, name of the triggerring component
        console.log(`* I * handleChange, value: ${value}`);
        // How to use the name of the component?
        setMeme(prev => (
            {
                ...prev,
                [name]: value // It will use the name of the component, which we received from the event
                // Note how we deliberately used the same names for object properties and HTML input elements.
            }
        ));
    }

    function handleGetImage() {
        // Select random image from the array:
        const memeIndex = Math.floor(Math.random() * memeArray.length);
        console.log(`* I * handleGetImage, selected index: ${memeIndex}, ${memeArray[memeIndex].url}`);
        setMeme(prev => ({ ...prev, imageUrl: memeArray[memeIndex].url }));
    }
    // console.log('* I * Rendered, memeArray:', memeArray);
    console.log('* I * Rendered, meme:', meme);

    // const lisfOfMemeImgs = memeArray.map(memeData => <li key={memeData.id}><img src={memeData.url}></img></li>);
    const lisfOfMemeImgs = [];

    // const diagMemeImgs = memeArray.map(memeData => /)
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder=".."
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder=".. .."
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={handleGetImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    );
}

export { Main };

/*
            <pre>{JSON.stringify(memeArray, null, 2)}</pre>
*/
