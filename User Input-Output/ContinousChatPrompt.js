/*
    4. Continuous Chat Prompt (Bonus)

    Create a loop that asks:
        "Say something (type 'exit' to quit"
    
    Keep logging what the user says and exit when they type 'exit'
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Say something (type 'exit' top quit):");

rl.on("line", (input) => {
  if (input.toLowerCase().trim() === "exit") {
    console.log("Goodbye!");
    rl.close();
  } else {
    console.log(`You said: ${input}`);
  }
});
