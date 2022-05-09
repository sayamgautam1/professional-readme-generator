// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
// readme page

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title? ",
  },
  {
    type: "input",
    name: "description",
    message: "please add a brief description of your project",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMeContent = generateMarkdown(data);
  fs.writeFile(fileName, readMeContent, (err) =>
    err ? console.log(err) : console.log("Successfully created readme!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt([...questions]).then((answers) => {
    writeToFile("./output/README.md", answers);
  });
}

// Function call to initialize app
init();
