import React from "react";

function Main(params) {

    const [meme, setMeme] = React.useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    });

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
                <button>Get a new meme image 🖼</button>
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
