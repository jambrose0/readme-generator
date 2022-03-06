// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## DESCRIPTION
   >  ${data.motivation} ${data.build} ${data.problem} ${data.learn}  
  ## INSTALLATION
   > ${data.installation}
  ## USAGE
  ${data.usage}
  ## LANGUAGES & TECHNOLOGIES
   > ${data.languages} and ${data.technologies}
  ## AUTHOR(S)
    -github.com/${data.contributors}
  ## LICENSE
  >
`;
}

module.exports = generateMarkdown;
