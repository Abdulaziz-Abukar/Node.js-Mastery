/*  3. Number Input

    Ask for a number and respond:

    if it's a number: "You entered [number]"
    if not: "That's not a number!"
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a number: ", (num) => {
  if (!isNaN(num)) {
    console.log(`You entered ${num}`);
  } else {
    console.log("That is not a number!");
  }
  rl.close();
});
