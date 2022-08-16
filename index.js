// TODO: Include packages needed for this application
const fs = require(`fs`);
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
fs.writeFile(`README.md`, `Example content`, function(err){
    if (err) throw err;
    console.log(`README created`);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();