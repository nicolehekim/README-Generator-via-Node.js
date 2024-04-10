// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  }

  switch (license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    case 'Apache License 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case 'GNU General Public License v3.0':
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"  
      
  
    default:
      return '';
  }
  
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }

  switch (license) {
    case "MIT License":
          return "https://opensource.org/licenses/MIT";
      case "Apache License 2.0":
          return "https://opensource.org/licenses/Apache-2.0";
      case "GNU General Puplic License v3.0":
          return "https://www.gnu.org/licenses/gpl-3.0";

      default:
          return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }

  return `## This project uses ${license} for its licensing.
  ${renderLicenseBadge};
  ${renderLicenseLink}`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description:
  ${data.description}

  ## Table of Contents:
  -[Instruction for Installation]
  -[Usage Information]
  -[Guidelines]
  -[Testing Instructions]
  -[License]
  -[Questions]

  ## Instruction for Installation:
  ${data.instruction}

  ## Usage Instruction:
  ${data.usage}

  ## Guidelines:
  ${data.guidelines}

  ## Testing Instruction:
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Questions:
  For any questions or comments regarding this project, please use the contact information below;

  Email: ${data.email};
  Github Profile: ${data.username} | https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
