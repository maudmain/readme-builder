// import the node modules
import inquirer from 'inquirer';
import * as fs from 'fs';

// import the separate js file with the markdown template
import generateMarkdown, { validateEmail, validateUserName } from "./utils/generateMarkdown.mjs";

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
        message: 'Detail any collaborators, third-party assets or tutorials you would liek to give credits to?',
        name: 'credits',
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
        validate: validateUserName
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: validateEmail
    },
];

// function to initialize the program
const init = () => {
    console.log(
        "\n",
        "-------------------- Welcome to README Builder --------------------",
        "\n",
        "Answer the questions below to generate your README.md File",
        "\n"
    );
    // call the inquirer prompts using the questions array as parameter
    inquirer.prompt(questions)
        .then((answers) => {
            // console.log(answers)
            // create a markdown template using the generateMarkdown funtion from the second js file using the  questions answers as parameters
            const mdTemplate = generateMarkdown(answers);
        
            // use the fs.write file to create a readme.md with the project name added to the file name, using the mdTemplate
            fs.writeFile(`${answers.title}-README.md`, mdTemplate, (error) =>
                error ? console.error(error) : console.log('Readme file generated!')
            );
        });

}  

//call the init function
init();
