console.log("Loading indexWeather.js");

// Interface to receive PUSH notifications from the Server via Server Sent Events
const eventSource = new EventSource('/temp/live');

const tempDisplay = document.getElementById('temp-display');

eventSource.onmessage = (evt) => {
    const evtData = JSON.parse(evt.data); // Now this is the event object, which we defined in weatherServer.js
    tempDisplay.innerHTML = evtData.temp; // Łapu-Capu - nie sprawdzamy, czy ten event jest rodzaju temp-updated
};

eventSource.onerror = () => {
    console.log('Connection failed...');
};

