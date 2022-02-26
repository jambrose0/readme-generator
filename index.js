// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

// TODO: Create an array of questions for user input
//questions to add:
//Project Title
//Description (maybe include motivation/why you build this?)
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
      name: "project title",
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
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
