const inquirer = require("inquirer");
const path = require("path");

const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const genInfo = (data) => {
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
    {
      type: "input",
      name: "name",
      message: "Type a name of any authors (including yourself):",
    },
    {
      type: "input",
      name: "authors",
      message: "Type one github username of any authors (including yourself):",
    },
    {
      type: "confirm",
      name: "addContributors",
      message: "Would you like to add another contributor?",
      default: "false,",
    },
    {
      type: "checkbox",
      name: "license",
      message: "Which license would you like to add to your README",
      choices: ["GNU", "Apache", "MIT", "None"],
    },
  ]);
};

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  genInfo().then((inquirerResponses) => {
    console.log("Generating README....");
    writeToFile("/dist/README.md", generateMarkdown({ ...inquirerResponses }));
  });
}

init();
