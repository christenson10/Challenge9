// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true
            } else {
                console.log('Please enter your name!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Tell us about your project...',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true
            } else {
                console.log('Please enter description!')
                return false
            }
        }
    },
];

// const promptUser = portfolioData => {
//     if(!portfolioData) {
//         portfolioData = []
//     }
//     inquirer.prompt(questions)
//     .then(inquirer)
// }

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (answers) {
        const markdownAnswers = generateMarkdown(answers)
        console.log(markdownAnswers)
        fs.writeFileSync('README.md', markdownAnswers, function(err) {
            return console.log(err);
          });
    })
}

// Function call to initialize app
init();