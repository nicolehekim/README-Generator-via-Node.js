// TODO: Include packages needed for this application
const inquirer = require('inquirer');   
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name/title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "How would you describe your project?",
        name: "description",
    },
    {
        type: "input",
        message: "Do you have any installation instructions for your project?",
        name: "instruction",
    },
    {
        type: "input",
        message: "Any usage instructions?",
        name: "usage",
    },
    {
        type: "input",
        message: "Any contribution guidelines?",
        name: "guidelines",
    },
    {
        type: "input",
        message: "Please write any test intructions you have for your project.",
        name: "test",
    },
    {
        type: "list",
        message: "Please choose which license you would like for your project:",
        name: "licenses",
        choices: [
            'MIT',
            'Apache License 2.0',
            'GNU General Public License v3.0',
        ]
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is the name/title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./${fileName}`, data, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Your README as been generated');
    });
}

// TODO: Create a function to initialize app
async function init() {
    console.log('Initializing README generator:');
    const answers = await inquirer.prompt(questions);

    let readmeInfo = generateMarkdown(answers);
    writeToFile('README file completed', readmeInfo);
}

// Function call to initialize app
init();
