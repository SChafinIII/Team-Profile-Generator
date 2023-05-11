// import all files and requirements including inquirer and fs and HTML generator and lib profiles

const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");

const teams = require("./lib/Employees.js");

// begin intern prompts
async function promptInternQuestions() {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the intern's name!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the intern's ID!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the intern's email!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?",
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
            return false;
          }
        }
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another employee?",
        default: false
      }
    ];
  
    const answers = await inquirer.prompt(questions);
  
    return answers;
  }
  
// Begin engineer prompts
    async function promptEngineerQuestions() {
        const questions = [
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true; 
                    } else {
                        console.log("Please enter the engineer's name!");
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's ID?",
                validate: idInput => {
                    if (idInput) {
                        return true; 
                    } else { 
                        console.log("Please enter the engineer's ID!");
                        return false; 
                    }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true; 
                } else {
                    console.log("Please enter the engineer's email!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true; 
                } else {
                    console.log("Please enter the engineer's GitHub username!");
                    return false; 
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add another employee?",
            default: false
        }
    ];

    // Ask manager prompts
async function promptManagerQuestions() {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "What is the managers's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter the managers's name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the managers's ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the managers's ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the managers's email?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the managers's email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the managers's office number?",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter the managers's office number!");
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to add another employee?",
        default: false,
      },
    ];

}
}


// data for employee types 


// function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log("Your team profile has been successfully created! Please check out the index.html")
    });
}

// function to initialize app
function init() {
    promptManagerQuestions()
    .then((managerData) => {
      const manager = new Manager(
        managerData.name,
        managerData.id,
        managerData.email,
        managerData.officeNumber
      );
      teams.push(manager);
      if (managerData.confirmAddEmployee) {
        promptEmployeeQuestions();
      } else {
        writeToFile("./dist/index.html", generateHTML(teams));
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();



