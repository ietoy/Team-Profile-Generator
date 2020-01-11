const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

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
    var role = data.role;
    var teammate = {
      name: name,
      id: id,
      role: role,
    };
    switch (role) {
      case "Manager":
        managerPrompt(teammate);
        break;
      case "Engineer":
        engineerPrompt(teammate);
        break;
      case "Intern":
        internPrompt(teammate);
        break;
      default:
        console.log("Something ain't workin'...");
    }
  })
}

// ADD'L PROMPTS BASED ON ROLE
    // ADD'L PROMPT FOR MANAGERS
    function managerPrompt(teammate) {
      return inquirer.prompt([
        {
          type: "input",
          name: "office",
          message: "What is your office number?"
        }
      ]).then(function(data) {
        var officeNum = data.office;
        teammate["officeNum"] = officeNum;
        roster.push(teammate);
        addAnother();
      })
    };
    // ADD'L PROMPT FOR ENGINEERS
    function engineerPrompt(teammate) {
      return inquirer.prompt([
        {
          type: "input",
          name: "github",
          message: "What is your GitHub username?"
        }
      ]).then(function(data) {
        var github = data.github;
        teammate["github"] = github;
        roster.push(teammate);
        addAnother();
      })
    };
    // ADD'L PROMPT FOR INTERNS
    function internPrompt(teammate) {
      return inquirer.prompt([
        {
          type: "input",
          name: "school",
          message: "Where do you go to school?"
        }
      ]).then(function(data) {
        var school = data.school;
        teammate["school"] = school;
        roster.push(teammate);
        addAnother();
      })
    };

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
            console.log("Success!")
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
                    // 
                    console.log(roster[i].name + " is a Manager");
                    break;
                case "Engineer":
                    // 
                    console.log(roster[i].name + " is an Engineer");
                    break;
                case "Intern":
                    // 
                    console.log(roster[i].name + " is an Intern");
                    break;
            }
        }
    
    return 
    
}



initialPrompt();