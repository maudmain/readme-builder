import inquirer from 'inquirer';
import * as fs from 'fs';
import generateMarkdown from "./utils/generateMarkdown.mjs";

// array of questions for user
const questions = [
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
        type: 'list',
        message: 'Choose a license for your project:',
        choices: [
            'MIT', 'Apache 2.0 License', 'GNU GPL v3'
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
];

// function to initialize the program
function init() {
    console.log(
        "\n",
        "-------------------- Welcome to README Builder --------------------",
        "\n",
        "Answer the questions below to generate your README.md File",
        "\n"
    );
    inquirer.prompt(questions)
        .then((answers) => {
            // console.log(answers)
            const mdTemplate = generateMarkdown(answers);
        
            fs.writeFile('README.md', mdTemplate, (error) =>
                error ? console.error(error) : console.log('Readme file generated!')
            );
        });

}

init();
