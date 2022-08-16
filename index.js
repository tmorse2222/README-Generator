// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
// TODO: Create an array of questions for user input
const questions = [`What is the title of your application?`, ``];

// TODO: Create a function to write README file
fs.writeFile(`newREADME.md`, `Example content`, function(err){
    if (err) throw err;
});
 inquirer.prompt([
     {
    name: 'title',
    message: `${questions[0]}`,
    type: 'input'
       }])
      .then(function(answer){
       console.log(answer);
      });
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();