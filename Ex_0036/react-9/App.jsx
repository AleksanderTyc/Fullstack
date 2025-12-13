import React from 'react';

function App() {
    const [count, setCount] = React.useState(0);

    console.log('Rendered');

    return (
        <>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
        </>
    );
}

export { App };
