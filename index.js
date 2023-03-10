// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "filename",
    message: "What would you like to name your README file?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines for your project.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions for your project.",
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("README file created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile(`${data.filename}.md`, generateMarkdown(data));
  });
}

// Function call to initialize app
init();
