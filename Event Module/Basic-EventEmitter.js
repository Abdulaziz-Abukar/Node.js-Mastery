/* 1. Basic EventEmitter
    Create an event called 'welcome' that logs "Welcome to the backend world!" when emitted.
*/

const EventEmitter = require("events"); // import the events module

const myEmitter = new EventEmitter(); // create an emitter instance

myEmitter.on("welcome", () => {
  // Set up a listener
  console.log("Welcome to the backend world!");
});

myEmitter.emit("welcome"); // Emit the event
