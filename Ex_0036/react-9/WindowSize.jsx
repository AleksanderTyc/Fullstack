import React from 'react';

function WindowSize() {
    const [windowSize, setWindowSize] = React.useState(window.innerWidth);

    function handleResize() {
        console.log('* I * Resize handled');
        setWindowSize(window.innerWidth);
    }

    React.useEffect(
        () => {
            window.addEventListener('resize', handleResize);
            return (
                () => window.removeEventListener('resize', handleResize)
            );
        },
        []
    );

    return (
        <h2>The window size is {windowSize}</h2>
    );
}
export { WindowSize };