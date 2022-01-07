// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

 if (license !== 'None') {
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
 }

 if (license == 'None') {
  return '';
 }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == 'ISC') {
    return `Project licensed under [ISC](https://opensource.org/licenses/ISC)`;
  } else if (license == 'MIT') {
    return `Project licensed under [MIT](https://opensource.org/licenses/MIT)`;
  } else if (license == 'Mozilla') {
    return `Project licensed under [Mozilla](https://www.mozilla.org/en-US/MPL/2.0/)`;
  } else if (license == 'Apache') {
    return `Project licensed under [Apache](https://opensource.org/licenses/Apache-2.0)`;
  }

  if (license == 'None') {
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license == 'None') {
    return '';
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  renderLicenseSection(response.license)

  return `# ${response.title} ${renderLicenseBadge(response.license)}

  ## Table of Contents

  - [Developer](#Developer)
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [License](#License)

  ## Developer

  ${response.github} </br>
  ${response.email}

  ## Description
  
  ${response.description}

  ## Installation

  ${response.installation_instructions}

  ## Usage

  ${response.usage_information}

  ## Contribution

  ${response.contribution_guidelines}

  ## Test

  ${response.test_instructions}

  ## License

  ${renderLicenseLink(response.license)}

`;
}

module.exports = generateMarkdown;
