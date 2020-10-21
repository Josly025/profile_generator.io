const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const memberArray = []; //empty array that object string gets pushed to

function employeeGen() {
  //questions using inquirer
  inquirer
    .prompt([
      //employee prompts (class Employee)
      {
        type: "list",
        message: "What is your employee position?",
        name: "position",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then(function (response) {
      if (response.position === "Manager") {
        //Manager prompt (class Manager)
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is your employee id?",
              name: "id",
            },
            {
              type: "input",
              message: "What is your employee email?",
              name: "email",
            },
            {
              type: "input",
              message: "What is your office number?",
              name: "officeNumber",
            },
          ])
          .then(function (response) {
            console.log(
              "This is the manager response: " + JSON.stringify(response)
            ); //test for function manager
            const newManager = new Manager(
              response.name,
              response.id,
              response.email,
              response.officeNumber
            );
            console.log(newManager);
            memberArray.push(JSON.stringify(newManager));
            console.log("this is the memberArray(Manager):  " + memberArray);
          });
      } else if (response.position === "Engineer") {
        // Prompt Engineer (class Engineer)
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is your employee id?",
              name: "id",
            },
            {
              type: "input",
              message: "What is your employee email?",
              name: "email",
            },
            {
              type: "input",
              message: "What is your GitHub username?",
              name: "github",
            },
          ])
          .then(function (response) {
            const newEngineer = new Engineer(
              response.name,
              response.id,
              response.email,
              response.github
            );
            console.log(newEngineer);
            memberArray.push(JSON.stringify(newEngineer));
            console.log("this is the memberArray (Engineer):  " + memberArray);
          });
      } else if (response.position === "Intern") {
        /// prompt Intern (class Intern)
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is your name?",
              name: "name",
            },
            {
              type: "input",
              message: "What is your employee id?",
              name: "id",
            },
            {
              type: "input",
              message: "What is your employee email?",
              name: "email",
            },
            {
              type: "input",
              message: "What school do you attend?",
              name: "school",
            },
          ])
          .then(function (response) {
            console.log("This is the Intern: " + JSON.stringify(response)); //log the response
            const newIntern = new Intern(
              response.name,
              response.id,
              response.email,
              response.school
            );
            console.log(newIntern);
            memberArray.push(JSON.stringify(newIntern));
            console.log("this is the memberArray (Intern):  " + memberArray);
          });
      }
      //code to render from the objects above
    })
    .then(function () {
      if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
      }
      fs.writeFileSync(outputPath, render(memberArray), "utf-8");
    });
}
employeeGen();

//calling renderHTMl function //add render inside

//render function - pass in array of all employee objects -- return a block of html with divs for employee

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
