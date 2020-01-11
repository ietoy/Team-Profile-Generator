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
    
    return `
    <!doctype html>
    <html lang="en">
    <head>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <title>Team Profile</title>
    </head>
    <body>
      <!-- PAGE CONTAINER -->
      <div class="container">
        <div class="jumbotron jumbotron-fluid bg-warning">
          <div class="container">
            <h1 class="display-4 text-center font-weight-bold">My Team</h1>
          </div>
        </div>
        <div class="jumbotron jumbotron-fluid bg-secondary">
          <div class="container clearfix">

            <!-- TEAMMATE CARDS DISPLAY HERE -->

          </div>  
        </div>
    <!-- END PAGE CONTAINER -->
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>`
    
}



initialPrompt();