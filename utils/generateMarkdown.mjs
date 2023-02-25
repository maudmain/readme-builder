// function to generate markdown for README
const generateMarkdown = (answers) =>
  ` 
# ${answers.title}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
    
## Installation

${answers.installation}

## Usage

${answers.usage}

## Contribution

${answers.contribution}

## Testing

${answers.test}

## License

Licensed under the ${answers.license} license.
${answers.license.value}
     
## Questions

Feel free to contact us with suggestions for improvements, questions or concerns via email at ${answers.email}.
And don't forget to check us up on GitHub at github.com/${answers.github}
`;

export default generateMarkdown;
