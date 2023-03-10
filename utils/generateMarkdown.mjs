// create an object with the different licence as key and the shields badge link as value
const licenseBadgeObject = {
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "Apache 2.0 License": '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  "GNU GPL v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}

// create a function to generate the badge according to the license picked in the questions
const generateLicenseBadge = (license) => {
 return  licenseBadgeObject[license];
};


// function to generate markdown for README
const generateMarkdown = (answers) =>
  ` 
# ${answers.title}

## ๐ป Description

${answers.description}

## ๐งพ Table of Contents

- [Installation](#๐ง-Installation)
- [Usage](#โฏ๏ธ-usage)
- [License](#๐-license)
- [Test](#๐งช-test)
- [Credits](#credits)
- [Contribution](#๐งโ๐คโ๐ง-contribution)
- [Questions](#๐ฌ-questions)
    
## ๐ง Installation

${answers.installation}

## โฏ๏ธ Usage

${answers.usage}

## ๐งช Testing

${answers.test}

## ๐งโ๐คโ๐ง Contribution

${answers.contribution}

## Credits

${answers.credits}

## ๐ License

Licensed under the ${answers.license} license.

${generateLicenseBadge(answers.license)}
     
## ๐ฌ Questions

Feel free to contact us with suggestions for improvements, questions or concerns via [email](${answers.email}). <br>

And don't forget to check us up on [GitHub](github.com/${answers.github})
`;

// validate email format using regex
export function validateEmail(email) {
  var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email.match(mailformat)) {
    return true;
  } else {
    return "Invalid email address.";
  }
}
// validate GitHUb username format using regex 
export function validateUserName(github) {
  var userformat = /^([A-Za-z0-9\-])+$/;
  if (github.match(userformat)) {
    return true;
  } else {
    return "Invalid GitHub username.";
  }
}

// export the generateMarkdown function from the current module, so that it can be imported and used in other modules
export default generateMarkdown;
