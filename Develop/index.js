// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: 'list',
        name: 'license',
        choices: [ 'MIT', 'ISC', 'Mozilla', 'Apache', 'None' ]
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your app.'
    },
    {
        type: 'input',
        name: 'installation_instructions',
        message: 'Please enter installation instructions for your app.'
    },
    {
        type: 'input',
        name: 'usage_information',
        message: 'Please enter usage information for your app.'
    },
    {
        type: 'input',
        name: 'contribution_guidelines',
        message: 'Please enter contribution guidelines for your app.'
    },
    {
        type: 'input',
        name: 'test_instructions',
        message: 'Please enter test instructions for your app.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    
    // writing file using process.cwd (returns name of current working directory)
    fs.writeFileSync(path.join(process.cwd(), fileName), response), (err) =>
            err ? console.error(err) : console.log('Generating README!');

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((responseInquirer) => { 
        console.log('Writing the README!')
        writeToFile('readme.md', generateMarkdown({...responseInquirer}));

     });

}

// Function call to initialize app
init();
