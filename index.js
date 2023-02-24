import inquirer from 'inquirer';
import * as fs from 'fs';

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
            { name: 'MIT', value: 'MIT' },
            { name: 'Apache 2.0 License', value: 'Apache 2.0 License' },
            { name: 'GNU GPL v3', value: 'GNU GPL v3' },
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
        const { title, description, installation, usage, license, contribution, test, github, email } = answers;
        

})

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
