// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
// TODO: Create an array of questions for user input
const questions = [`What is the title of your application?`, `Please provide a description of your application`];

// TODO: Create a function to write README file

 inquirer.prompt([
     {
    name: 'title',
    message: `${questions[0]}`,
    type: 'input'
       },
    {
        name: `description`,
        message: `${questions[1]}`,
        type: `input`
    }])
      .then(function(answer){
    answer1 = answer.title;
    answer2 = answer.description;
      }).then(function(){
      fs.writeFile(`newREADME.md`, `<h1>${answer1}</h1><br>
      <h2>Description:</h2><br>
      ${answer2}<br>`, function(err){
        if (err) throw err;
    });});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();