// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  // add license badge at top



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
