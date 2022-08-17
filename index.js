// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
// TODO: Create an array of questions for user input
const questions = [`What is the title of your application?`, `Please provide a description of your application`, `Please provide any installation requirements`,
`How should this app be operated?`, `How would one contribute to this repository/code base?`, `What tests were performed on the app?`, 
`Please enter your GitHub username`, `Please enter your email`, `Which license would you like to apply to the application?`];
// Function to ask user details 
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
    // Function to assign data after questions answered
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
    link = ``;
    url = ``;
    // If statement to check value of license
    if (answer.license == `MIT`) {
        link = `https://img.shields.io/badge/License-MIT-yellow`;
        url = `https://opensource.org/licenses/MIT`;
    } else if (answer.license == `IBM`) {
        link = `https://img.shields.io/badge/License-IPL%201.0-blue`;
        url = `https://opensource.org/licenses/IPL-1.0`;
    } else if (answer.license == `Apache`) {
        link = `https://img.shields.io/badge/License-Apache%202.0-yellowgreen`;
        url = `https://www.apache.org/licenses/LICENSE-2.0`;
    } else if (answer.license == `BSD 3`) {
        link = `https://img.shields.io/badge/License-BSD%203--Clause-orange`;
        url = `https://opensource.org/licenses/BSD-3-Clause`;
    };
    // Function creating new READMe
      }).then(function(){
      fs.writeFile(`newREADME.md`, `<h1>${answer1} <img src="${link}"></h1><br>
      <h2>Table of Contents:</h2><br>
      <a href="#description">Description</a><br>
      <a href="#installation">Installation</a><br>
      <a href="#usage">Usage Instructions</a><br>
      <a href="#contribute">Contribution Instructions</a><br>
      <a href="#tests">Tests</a><br>
      <a href="#license">License Info</a><br>
      <a href="#questions">Questions</a><br>
      <h2 id="description">Description:</h2><br>
      ${answer2}<br>
      <h2 id="installation">Installation:</h2><br>
      ${answer3}<br>
      <h2 id="usage">Usage:</h2><br>
      ${answer4}<br>
      <h2 id="contribute">Contributions:</h2><br>
      ${answer5}<br>
      <h2 id="tests">Tests:</h2><br>
      ${answer6}<br>
      <h2 id="license">License:</h2><br>
      This application is licensed with ${answer9}. A link to the documentation can be found <a href="${url}">here</a><br>
      <h2 id="questions">Questions:</h2><br>
      GitHub profile: <a href="https://github.com/${answer7}">${answer7}</a><br>
      Email me at ${answer8}<br>
      `,
    //   Function for error
      function(err){
        if (err) throw err;
    });}).then(function(){
        // Console log on successful creation
console.log(`Readme created and saved under newREADME.md`)
    });
