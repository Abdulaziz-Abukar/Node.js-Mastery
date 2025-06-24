/* 4. Once vs On
    Create an 'init' event. Use .once() to log "System initialized" and .on() to log "Init signal received". Emit it twice. See the difference.
*/

const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.once("init", () => {
  console.log("System initialized");
});

myEmitter.on("init", () => {
  console.log("Init signal received");
});

myEmitter.emit("init");
myEmitter.emit("init");
