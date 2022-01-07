// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

 if (license !== 'None') {
  return licenseImg = `(https://img.shields.io/badge/license-${license}-blue.svg)`;
 }

 if (license == 'None') {
  return '';
 }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == 'ISC') {
    return `Project license under [ISC](https://opensource.org/licenses/ISC)`;
  } else if (license == 'MIT') {
    return `Project license under [MIT](https://opensource.org/licenses/MIT)`;
  } else if (license == 'Mozilla') {
    return `Project license under [Mozilla](https://www.mozilla.org/en-US/MPL/2.0/)`;
  } else if (license == 'Apache') {
    return `Project license under [Apache](https://opensource.org/licenses/Apache-2.0)`;
  }

  if (license == 'None') {
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  renderLicenseBadge(response.license);
  renderLicenseLink(response.license);

  return `# ${data.title} ${licenseImg}

  ## Table of Contents

  - [Developer Information](#Developer Information)
  - [Description](#Description)
  - [Installation Instructions](#Installation Instructions)
  - [Usage Information](#Usage Information)
  - [Contribution Guidelines](#Contribution Guidelines)
  - [Test Instructions](#Test Instructions)
  - [License](#License)

  ## Developer Information

  ${data.github_username} </br>
  ${data.email}

  ## Description

  ${data.description}

  ## Installation Instructions

  ${data.installation_instructions}

  ## Usage Information

  ${data.usage_information}

  ## Contribution Guidelines

  ${data.contribution_guidelines}

  ## Test Instructions

  ${data.test_instructions}

  ## License

  ${data.license}

`;
}

module.exports = generateMarkdown;
