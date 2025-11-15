import path from 'node:path';

function serveStatic(baseDir) {
    const filePath = path.join(baseDir, 'public', 'index.html');
    return filePath;
}

export { serveStatic };
