// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//questions to add:
//Table of Contents(optional)- on my end? template literal?
//credits (collaborators, 3rd party assets, etc)
//features
//maybe unnecessary below:
//how to contribute
//badges(wtf are they?)
//license

//tests
// const questions = [];
const genInfo = () => {
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
      name: "installation",
      message: "Enter installation instructions if needed:",
    },
    {
      type: "input",
      name: "usage",
      message: "Describe the proper way(s) to use this program:",
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
    {
      type: "input",
      name: "contributors",
      message: "Type one github username of any authors (including yourself):",
    },
    {
      type: "confirm",
      name: "addContributors",
      message: "Would you like to add another contributor?",
      default: "false,",
    },

    {
      type: "input",
      name: "motivation",
      message: "What was your motivation to for this project?",
    },
    {
      type: "input",
      name: "build",
      message: "Why did you build this project?",
    },
    {
      type: "input",
      name: "problem",
      message: "What problem does it solve/what need does it address?",
    },
    {
      type: "input",
      name: "learn",
      message: "What did you learn?",
    },
  ]);
};
const projDesc = () => {};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("readme.md", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  // return generateMarkdown(data);
}

// Function call to initialize app
genInfo()
  .then((answers) => {
    console.log(answers);
    const markdown = generateMarkdown(answers);
  })
  .then((writeTemplate) => {
    return fs.writeToFile(writeTemplate);
  });

init();

// writeToFile("readme.md", writeToFile, (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });
// });
