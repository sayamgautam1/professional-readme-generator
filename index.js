// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is your project title? ",
  },
  {
    type: "input",
    name: "description",
    message: "please add a brief description of your project",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([...questions]).then((answers) => {
    ///hshsh
    console.log(answers);
  });
}

// Function call to initialize app
init();
