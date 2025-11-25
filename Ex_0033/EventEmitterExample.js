// Import EventEmitter
import { EventEmitter } from 'node:events';

const customerDetails = {
    fullName: "Meryl Sheep",
    email: 'baah@thedevilwearswool.com',
    phone: 12345678910
};

// Create a new Emitter
const emailRequestEmitter = new EventEmitter();

// Define Listener function
function generateEmail(customer) {
    console.log(`Email generated for ${customer.email}`);
}

// Register the Listener to respond to the Event
emailRequestEmitter.on('emailRequest', generateEmail); // Only Listener function name here

// Emit the Event (trigger)
emailRequestEmitter.emit('emailRequest', customerDetails); // Listener function's parameters here

// My experiment
console.log('First log');
emailRequestEmitter.emit('emailRequest', { email: "whoknows@where.com" });
console.log('Second log');
setTimeout(() => {
    emailRequestEmitter.emit('emailRequest', { email: "godknows@where.com" });
}, 2000);
console.log('Third log');
