// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
// readme page

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: ",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email: ",
  },
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
  {
    type: "input",
    name: "installation",
    message: "Describe the installation process if any: ",
  },
  {
    type: "input",
    name: "usage",
    message: "What is this project usage for?",
  },
  {
    type: "list",
    name: "license",
    message: "Chose the appropriate license for this project: ",
    choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
  },
  {
    type: "input",
    name: "tests",
    message: "Is there a test included?",
  },
  {
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? ",
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
