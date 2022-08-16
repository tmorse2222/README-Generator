// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
// TODO: Create an array of questions for user input
const questions = [`What is the title of your application?`, ``];

// TODO: Create a function to write README file

 inquirer.prompt([
     {
    name: 'title',
    message: `${questions[0]}`,
    type: 'input'
       }])
      .then(function(answer){
    answer1 = answer.title;
      }).then(function(){
      fs.writeFile(`newREADME.md`, `<h1>${answer1}</h1><br>`, function(err){
        if (err) throw err;
    });});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();