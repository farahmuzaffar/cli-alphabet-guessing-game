#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number
// user input for guessing number
// compare user input with computer generated number
const randomAlphabet = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessAlphabet",
        type: "string",
        message: "please guess an alphabet between a-f:",
    }
]);
if (answers.userGuessAlphabet === randomAlphabet) {
    console.log("congratulations! you guessed right !");
}
else {
    console.log("you guessed wrong !");
}
