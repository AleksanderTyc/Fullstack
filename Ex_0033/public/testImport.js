console.log('testImport.js import.meta', import.meta);

function testImport() {
    console.log('In function testImport import.meta', import.meta);
    return 1;
}

export { testImport };
