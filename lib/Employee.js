// Employee parent class should have the following properties and methods:

    // getName()
    // getId()
    // getEmail()
    // getRole() // returns 'Employee'

// This is our constructor function, Employee
class Employee {
    // Employee takes in three inputs: name, id, and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // the getName function looks at our Employee object and returns that employee's name
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

}

module.exports = Employee;