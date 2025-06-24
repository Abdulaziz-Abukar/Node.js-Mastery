/* 3. Multiple Listeners
    Attach two listeners to a 'launch' event:
        One logs "Enginer start"
        Other logs "Rocket launcched".
    emit the event
*/

const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("launch", () => {
  console.log("Engine started");
});
myEmitter.on("launch", () => {
  console.log("Rocket launched");
});

myEmitter.emit("launch");
