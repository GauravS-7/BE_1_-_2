const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
  employeeProfilePicUrl: String,
  employeeFullName: String,
  designation: String,
  idNumber: Number,
  dob: Date,
  mailId: String,
  telephoneNumber: Number,
  address: String,
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
