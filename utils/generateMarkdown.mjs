const licenseBadgeObject = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache 2.0 License": '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  "GNU GPL v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}

const generateLicenseBadge = (license) => {
 return  licenseBadgeObject[license];
};


// function to generate markdown for README
const generateMarkdown = (answers) =>
  ` 
# ${answers.title}

## 💻 Description

${answers.description}

## 🧾 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Test](#test)
- [Contribution](#contribution)
- [Questions](#questions)
    
## 🔧 Installation

${answers.installation}

## ⏯️ Usage (How it works)

${answers.usage}

## 🧪 Testing

${answers.test}

## 🧑‍🤝‍🧑 Contribution

${answers.contribution}

## 📜 License

Licensed under the ${answers.license} license.

${generateLicenseBadge(answers.license)}
     
## 💬 Questions

Feel free to contact us with suggestions for improvements, questions or concerns via [email](${answers.email}).
And don't forget to check us up on [GitHub](github.com/${answers.github})
`;

export default generateMarkdown;
