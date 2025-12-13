import React from 'react';

function App() {
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(0);

    console.log('Rendered');

    return (
        <>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <pre>{JSON.stringify(starWarsData)}</pre>
        </>
    );
}

export { App };
