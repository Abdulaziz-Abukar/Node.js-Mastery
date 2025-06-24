/* 5. Build a Mini Alarm System
    Set up an 'alarm' event:
        If passed 'fire' log "Evacuate!"
        If passed 'intruder' log "Call security!"

    try emitting both
*/

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("alarm", (code) => {
  if (code === "fire") {
    console.log("Evacuate!");
  } else if (code === "intruder") {
    console.log("Call security!");
  } else {
    console.log("Unrealized Code.. System reboot.");
  }
});

myEmitter.emit("alarm", "fire");
myEmitter.emit("alarm", "intruder");
myEmitter.emit("alarm", "money");
