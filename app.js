const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var roster = [];

// BEGINS USER PROMPTS
function initialPrompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is your Employee ID number?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your work email address?"
    },
    {
      type: "list",
      name: "role",
      message: "What is your role on this project?",
      choices: [
        "Manager",
        "Engineer",
        "Intern"
      ]
    },
  ]).then(function(data) {
    var name = data.name;
    var id = data.id;
    var email = data.email;
    var role = data.role;

    if (role === "Manager") {
      return inquirer.prompt([
        {
          type: "input",
          name: "office",
          message: "What is your office number?"
        }
      ]).then(function(data) {
        var officeNum = data.office;
        var teammate = new Manager(name, id, email, role, officeNum);
        roster.push(teammate);
        // console.log(roster);
        addAnother()
      })
    } else if (role === "Engineer") {
      return inquirer.prompt([
        {
          type: "input",
          name: "github",
          message: "What is your GitHub username?"
        }
      ]).then(function(data) {
        var github = data.github;
        var teammate = new Engineer(name, id, email, role, github);
        roster.push(teammate);
        // console.log(roster);
        addAnother()
      })
    } else if (role === "Intern") {
      return inquirer.prompt([
        {
          type: "input",
          name: "school",
          message: "What shcool do you attend?"
        }
      ]).then(function(data) {
        var school = data.school;
        var teammate = new Intern(name, id, email, role, school);
        roster.push(teammate);
        // console.log(roster);
        addAnother()
      })
    };
  });
}


// PROMPTS USER TO ADD ANOTHER TEAMMATE
function addAnother() {
  return inquirer.prompt([
    {
      type: "confirm",
      name:"addanother",
      message: "Would you like to add another teammate?"
    }
  ]).then(function(data) {
    var add = data.addanother;
    switch (add) {
    case true:
      initialPrompt();
      break;
    case false:
      console.log("All done! Lets see who's on your team...")
      fs.writeFile("output/teamprofile.html", renderHTML(roster), function(err) {
        if (err) {
          throw err;
        }
        console.log(roster)
      })
      break;
    default:
      console.log("Something ain't workin'...");
    }
  })
}

// GENERATES HTML FROM ROSTER ONCE PROMPTS COMPLETED
function renderHTML(roster) { 
    
    // TEAMMATE TILE CREATION LOOP
        for (var i = 0; i < roster.length; i++) {
            switch (roster[i].role) {
                case "Manager":
                    console.log(roster[i].name + " is a Manager");
                    break;
                case "Engineer":
                    console.log(roster[i].name + " is an Engineer");
                    break;
                case "Intern":
                    console.log(roster[i].name + " is an Intern");
                    break;
            }
        }
    
    return 
    
}

initialPrompt();
