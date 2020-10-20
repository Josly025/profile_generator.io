//Define and export the Manager class
// Class inheritance from Parent class - Employee
//adding officeNumber and getOfficerNumber

const Employee = require("./Employee");

//extends to link to Employee class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email); ///super add the parameters from Employee class
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
