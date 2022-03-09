// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let licenseBadge = "";
//   if ("${data.license} = GNU") {
//     licenseBadge = `![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
//   } else if ("${data.license} = Apache") {
//     licenseBadge = `![License: MIT](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
//   } else if ("${data.license} = MIT") {
//     licenseBadge =
//       "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
//   } else {
//     licenseBadge = "";
//   }
//   return licenseBadge;
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseLink = "";
//   if ("${data.license} = GNU") {
//     licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
//   } else if ("${data.license} = Apache") {
//     licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
//   } else if ("${data.license} = MIT") {
//     licenseLink = "https://www.mit.edu/~amini/LICENSE.md";
//   } else {
//     licenseLink = "";
//   }
//   return licenseLink;
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   const licenseType = `${data.license}`;
//   if (renderLicenseBadge === "" && renderLicenseLink === "") {
//     return;
//   } else {
//     return renderLicenseBadge(license);
//     return renderLicenseLink(license);
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## DESCRIPTION
   >  ${data.motivation} 
   >  ${data.build} 
   >  ${data.problem} 
   >  ${data.learn}  

  ## INSTALLATION

   > ${data.installation}

  ## USAGE
  ${data.usage}

  ## LANGUAGES & TECHNOLOGIES
   > ${data.languages} and ${data.technologies}

  ## AUTHOR(S)
  >
  - [${data.name}](https://www.github.com/${data.authors})
>

## LICENSE


  ## PREVIEW
  > ![Screenshot of Usage]()
`;
}

module.exports = generateMarkdown;

//   > ${renderLicenseSection()}
