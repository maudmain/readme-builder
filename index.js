import inquirer from 'inquirer';
import * as fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.mjs";



// array of questions for user
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {

        type: 'input',
        message: 'Provide a brief description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step guide:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use your project? Provide a step-by-step guide:',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'Choose a license for your project:',
        choices: [
            {
                name: 'MIT', value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            },
            {
                name: 'Apache 2.0 License', value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            },
            {
                name: 'GNU GPL v3', value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            }
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines for your project?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'What are the test instructions for your project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
])
    .then((answers) => {
        // console.log(answers)


        const mdTemplate = generateMarkdown(answers);
        
        fs.writeFile('README.md', mdTemplate, (error) =>
            error ? console.error(error) : console.log('Readme file generated!')
        );
    });




