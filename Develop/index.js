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
    {
        type: 'input',
        name: 'installation',
        message: 'How is your project installed?',
        validate: installationInput => {
            if (installationInput) {
                return true
            } else {
                console.log('Please enter Installation Information!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used?',
        validate: usageInput => {
            if (usageInput) {
                return true
            } else {
                console.log('Please enter Usage!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'license',
        message: 'Please provide your license:',
        validate: licenseInput => {
            if (licenseInput) {
                return true
            } else {
                console.log('Please enter License info!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to your project?',
        validate: contributorsInput => {
            if (contributorsInput) {
                return true
            } else {
                console.log('Please enter Contributors!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What testing was completed?',
        validate: testInput => {
            if (testInput) {
                return true
            } else {
                console.log('Please enter Testing Info!')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any additional questions?',
        validate: questionsInput => {
            if (questionsInput) {
                return true
            } else {
                console.log('Please enter any Question you may have.')
                return false
            }
        }
    },
];

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