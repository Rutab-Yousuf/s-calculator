#! /usr/bin/env node 
//shabang

import inquirer from "inquirer";

const reply = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "number1" },
  { message: "Enter your second number", type: "number", name: "number2" },
  {
    message: "Select any option from the list below",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditional statement 
if (reply.operator === "addition"){
    console.log(reply.number1 + reply.number2);
}
else if (reply.operator === "subtraction"){
    console.log( reply.number1 - reply.number2);
}
else if ( reply.operator === "multiplication"){
    console.log(reply.number1 * reply.number2);
}
else if (reply.operator === "division"){
    console.log(reply.number1 / reply.number2);
}
else {
    console.log("Please choose a valid operator.")
}