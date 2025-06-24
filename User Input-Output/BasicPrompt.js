/* 1. Basic Prompt
    Prompt the user: "Whats your favorite language"
    Then log: "Nice! [answer] is cool!"
*/

// Call the readline module
const readline = require("readline");

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question
rl.question("Whats your favorite language? ", (answer) => {
  console.log(`Nice! ${answer.trim()} is cool!`);
  rl.close();
});
