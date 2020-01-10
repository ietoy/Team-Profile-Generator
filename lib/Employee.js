// Employee parent class should have the following properties and methods:
    // name
    // id
    // title

    // getName()
    // getId()
    // getEmail()
    // getRole() // returns 'Employee'

class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

// var me = new Employee;

module.exports = Employee;