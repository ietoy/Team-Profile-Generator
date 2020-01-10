// This is our constructor function, Employee
class Employee {
    // Employee takes in three inputs: name, id, and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }

    // The following 4 functions return information based on the constructed Employee object
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;