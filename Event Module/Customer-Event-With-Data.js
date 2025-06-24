/* 2. Customer Event with Data
    Emit an 'order" event and pass a customer name. The listener should log:    "Order received for [customerName]"
*/

const EventEmitter = require("events"); // import the event module

const myEmitter = new EventEmitter(); // create a new Event Emitter instance

// add listener that has a callback function that takes name as a parameter
myEmitter.on("order", (name) => {
  console.log(`Order received for ${name}`);
});

// emits the order listener and provides the callback function the value it needs to display
myEmitter.emit("order", "Abdul");
