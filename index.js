// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

// TODO: Create an array of questions for user input
//questions to add:
//Table of Contents(optional)
//Installation (if needed)
//Usage (instruction and examples)
//credits (collaborators, 3rd party assets, etc)
//features
//maybe unnecessary below:
//how to contribute
//badges(wtf are they?)

//tests
// const questions = [];
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your Project Title?",
      validate: (titleEl) => {
        if (titleEl) {
          return true;
        } else {
          console.log("Please enter a Project Title!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief Description of your Project:",
      validate: (descriptionEl) => {
        if (descriptionEl) {
          return true;
        } else {
          console.log("Please enter a Project Description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions if needed:",
    },
    {
      type: "checkbox",
      name: "languages",
      message: "What did you build this project with? (Check all that apply)",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "technologies",
      message:
        "Feel free to add any additional technologies you may have used:",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
questions();
init();
