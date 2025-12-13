import React from 'react';

function App() {
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(1);

    console.log('Rendered');

    React.useEffect(
        () => {
            console.log("Effect running");
            fetch(`https://swapi.dev/api/people/${count}`)
                .then(response => response.json())
                .then(data => setStarWarsData(data))
        }, [count]
    );

    return (
        <>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </>
    );
}

export { App };
