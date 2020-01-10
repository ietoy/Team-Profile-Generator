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
                console.log("You're a manager, Harry!");
                break;
            case "Engineer":
                console.log("I bet you can't spell");
                break;
            case "Intern":
                console.log("You don't expect to get paid, right?");
                break;
            default:
                console.log("Something ain't workin'...");
        }

    })
}

initialPrompt();