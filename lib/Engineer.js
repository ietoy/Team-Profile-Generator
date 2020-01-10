// Extends from Employee
// Should also include
    // github //GitHub username
    // getGitHub()
    // getRole() // overridden to return 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

}

module.exports = Engineer;
