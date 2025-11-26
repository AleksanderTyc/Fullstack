const eventSource = new EventSource('/api/news');

const liveContainer = document.getElementById('live-container');

// Handle live updates
eventSource.onmessage = (evt) => {
    const data = JSON.parse(evt.data);
    const story = data.story;
    liveContainer.textContent = story;
}

// Handle connection loss
eventSource.onerror = () => {
    console.log('Connection lost...');
}