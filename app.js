const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


function initialPrompt() {
    // console.log("Welcome to the Team Profile Generator!");
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
                // console.log("You don't expect to get paid, right?");
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
        addAnother();
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
        // console.log(github);
        addAnother();
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
        // console.log(school);
        addAnother();
    })
};

function addAnother() {
    return inquirer.prompt([
        {
            type: "confirm",
            name:"addanother",
            message: "Would you like to add another teammate?"
        }
    ]).then(function(data) {
        var add = data.addanother;
        // console.log(add);
        switch (add) {
            case true:
                console.log("You would like to add another teammate!")
                initialPrompt();
                break;
            case false:
                console.log("All done! Lets see who's on your team...")
                // Render pdf stuff goes here!
                break;
            default:
                console.log("Something ain't workin'...");
        }
    })
}



initialPrompt();