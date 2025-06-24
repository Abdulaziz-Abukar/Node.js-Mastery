/* 2. Login Simulator

    Ask for username and password (seperately).
    Then log: "Welcome, [username]. Logging you in..."
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter your username: ", (username) => {
  rl.question("Please enter your password: ", (password) => {
    console.log(`Welcome, ${username}, logging you in...`);
    rl.close();
  });
});
