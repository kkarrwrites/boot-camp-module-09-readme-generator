// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateFileName = require("./utils/generateFileName");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
    default: "N/A",
  },
  {
    type: "input",
    name: "installation",
    message: "What are your project's installation instructions?",
    default: "N/A",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your project's usage information?",
    default: "N/A",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are your project's contribution guidelines?",
    default: "N/A",
  },
  {
    type: "input",
    name: "test",
    message: "What are your project's test instructions?",
    default: "N/A",
  },
  {
    type: "list",
    message: "What is your project's license?",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v3.0",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "The Unlicense",
      "None",
    ],
    default: "None",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  inquirer.prompt(data).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    const fileName = generateFileName(answers);

    fs.appendFile(fileName, readmeContent, (error) =>
      error ? console.error(error) : console.log("README.md created.")
    );
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
