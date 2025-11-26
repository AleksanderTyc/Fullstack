// Import EventEmitter
import { EventEmitter } from 'node:events';
import { createAlert } from '../utils/createAlert.js';

// Create and export a new instance of EventEmitter called sightingEvents.
const sightingEvents = new EventEmitter();

// Register the listener function when an event called 'sightingEvents' is detected.
sightingEvents.on('sighting-added', createAlert);

export { sightingEvents };
