const renderLicense = require ('./utils/helpers.js')
const fs = require("fs");
const inquirer = require('inquirer');
// fs.readFile("data.csv", "utf8", (error, data) =>
//   error ? console.error(error) : console.log(data)
// );
// fs.writeFile("README.md", process.argv[2], (err) =>
//   err ? console.error(err) : console.log("Success!")
// );
function askUser(){
inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions of your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage of your project?",
    name: "usage",
  },
  {
    type: "confirm",
    message: "Would you like to add any contributors?",
    name: "addContributor",
  },
  {
    type: "input",
    message: "enter contributors name",
    when: (answer) => answer.addContributor,
    name: "contributor",
  },

  {
    type: "list",
    message: "What is the license used your project?",
    choices: ["Apache 2.0 License", "Boost Software License 1.0", "CC0", "Eclipse Public License 1.0"],
    name: 'license'
  },
  // 'What is your github username?'
  // 'What is your email?'
]).then(answers => {
    // createString(answers)
    return `# ${answers.title}
${renderLicense(answers.license)}
## table of contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributor)

### Description
${answers.description}

### Installation
${answers.installation}

### Usage
${answers.usage}

### Contributors
${answers.contributor}

${answers.description}
`
}).then(READMEstring => {
fs.writeFile('README.md', READMEstring, (err) => {
    if(err) throw err
})

})
}
function createString(data){
    // return `
    // # ${data.title}
    // `
}
askUser()
// ` 
//    ## Readme
//    # ${title}
//    # 
//    `;
