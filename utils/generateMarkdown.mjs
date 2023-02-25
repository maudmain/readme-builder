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
     
## 💬 Questions

Feel free to contact us with suggestions for improvements, questions or concerns via [email](${answers.email}).
And don't forget to check us up on [GitHub](github.com/${answers.github})
`;

export default generateMarkdown;
