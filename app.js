const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


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

        console.log("Hello " + name + "! Your Employee ID is " + id + " and you are a " + role + " for this project.")

        switch (role) {
            case "Manager":
                // console.log("You're a manager, Harry!");
                managerPrompt();
                break;
            case "Engineer":
                // console.log("I bet you can't spell");
                engineerPrompt();
                break;
            case "Intern":
                console.log("You don't expect to get paid, right?");
                internPrompt();
                break;
            default:
                console.log("Something ain't workin'...");
        }

    })
}

function managerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "office",
            message: "What is your office number?"
        }
    ]).then(function(data) {
        var officeNum = data.office;
        // console.log(officeNum);
    })
};

function engineerPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?"
        }
    ]).then(function(data) {
        var github = data.github;
        console.log(github);
    })
};

function internPrompt() {
    return inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Where do you go to school?"
        }
    ]).then(function(data) {
        var school = data.school;
        console.log(school);
    })
};

initialPrompt();