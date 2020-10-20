// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const employee = require("./Employee.js");

//extends to link to Employee class
class Manager extends employee {
  constructor(officeNumber) {
    super(name, id, email); ///super add the parameters from Employee class
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
