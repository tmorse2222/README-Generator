// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
// TODO: Create an array of questions for user input
const questions = [`What is the title of your application?`, `Please provide a description of your application`, `Please provide any installation requirements`,
`How should this app be operated?`, `How would one contribute to this repository/code base?`, `What tests were performed on the app?`, 
`Please enter your GitHub username`, `Please enter your email`, `Which license would you like to apply to the application?`];

// TODO: Create a function to write README file

 inquirer.prompt([
     {
    name: 'title',
    message: questions[0],
    type: 'input'
       },
       {
           name: `description`,
           message: questions[1],
           type: `input`
       },
    {
        name: `installation`,
        message: questions[2],
        type: `input`
    },
    {
        name: `usage`,
        message: questions[3],
        type: `input`
    },
    {
        name: `contribute`,
        message: questions[4],
        type: `input`
    },
    {
        name: `tests`,
        message: questions[5],
        type: `input`
    },
    {
        name: `username`,
        message: questions[6],
        type: `input`
    },
    {
        name: `email`,
        message: questions[7],
        type: `input`
    },
    {
        name: `license`,
        message: questions[8],
        type: `list`,
        choices: [`MIT`, `IBM`, `Apache`, `BSD 3`]
    }])
      .then(function(answer){
    answer1 = answer.title;
    answer2 = answer.description;
    answer3 = answer.installation;
    answer4 = answer.usage;
    answer5 = answer.contribute;
    answer6 = answer.tests;
    answer7 = answer.username;
    answer8 = answer.email;
    answer9 = answer.license;
      }).then(function(){
      fs.writeFile(`newREADME.md`, `<h1>${answer1}</h1><br>
      <img src="https://img.shields.io/badge/License-Apache%202.0-yellowgreen"><br>
      <img src="https://img.shields.io/badge/License-MIT-yellow"><br>
      <img src="https://img.shields.io/badge/License-IPL%201.0-blue"><br>
      <img src="https://img.shields.io/badge/License-BSD%203--Clause-orange"><br>
      <h2>Table of Contents:</h2><br>
      <a href="#description">Description</a><br>
      <a href="#installation">Installation</a><br>
      <a href="#usage">Usage Instructions</a><br>
      <a href="#contribute">Contribution Instructions</a><br>
      <a href="#tests">Tests</a><br>
      <a href="#license">License Info</a><br>
      <a href="#questions">Questions</a><br>
      <h2>Description:</h2><br>
      ${answer2}<br>
      <h2>Installation:</h2><br>
      ${answer3}<br>
      <h2>Usage:</h2><br>
      ${answer4}<br>
      <h2>Contributions:</h2><br>
      ${answer5}<br>
      <h2>Tests:</h2><br>
      ${answer6}<br>
      <h2>License:</h2><br>
      This application is licensed with ${answer9}.<br>
      <h2>Questions:</h2><br>
      GitHub profile: <a href="https://github.com/${answer7}">${answer7}</a><br>
      Email me at ${answer8}<br>
      `, function(err){
        if (err) throw err;
    });});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();