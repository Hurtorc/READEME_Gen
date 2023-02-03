// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.filename}

### ${data.title}

## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contribution](#contribution)
[Test](#test)
[License](#license)
[Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## License
${data.license}

## Questions
If you have any questions, please contact me at ${data.email} or visit my GitHub page at ${data.github}.

`;
}

module.exports = generateMarkdown;
