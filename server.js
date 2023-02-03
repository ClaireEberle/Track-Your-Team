const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");

const employee = [];
const role = [];
const department = [];

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "password",
    database: "team_db",
  },
  console.log(`connected to the team_db database.`)
);

const teamOptions = () => {
  inquirer
    .prompt([
      {
        name: "actionPrompt",
        type: "list",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View All Departments",
          "Add Deparment",
        ],
        message: "What would you like to do?",
      },
    ])
    .then((ans) => {
      if (ans.actionPrompt === "View All Employees") {
        db.query("SELECT *FROM employee", function (err, results) {
          console.table(results);
          teamOptions();
        });
      }
      if (ans.actionPrompt === "Add Employee") {
        addEmployee();
      }
      if (ans.actionPrompt === "Update Employee Role") {
        updateEmployeeRole();
      }
      if (ans.actionPrompt === "View All Roles") {
        viewRoles();
      }

      if (ans.actionPrompt === "Add Role") {
        addRole();
      }
      if (ans.actionPrompt === "View All Departments") {
        viewDepartments();
      } 
      if (ans.actionPrompt === "Add Department") {
        addDepartment();
      }
    });
};

teamOptions();

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: "employeeNameF",
        type: "input",
        message: "Employee's first name:",
      },
      {
        name: "employeeNameL",
        type: "input",
        message: "Employee's last name:",
      },
      {
        name: "employeeRoleID",
        type: "input",
        message: "Employee's role ID:",
      },
      {
        name: "managerID",
        type: "input",
        message: "Employee's manager's ID(if N/A type NULL):",
      },
    ])
    .then((ans) => {
   
      db.query("INSERT INTO employee(first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)", [ans.employeeNameF, ans.employeeNameL, ans.employeeRoleID, ans.managerID], (err, results) => {
        if (err){
            console.log(err)
        }else{
            console.table(results);
            teamOptions();
        }
      })
    });

};

const updateEmployeeRole = () => {
  inquirer.prompt([
    {
        name:"updateRole",
        type: "input",
        message: "Enter Employee's ID number"
  },
  {
    name: "employeeNewRole",
    type: "input",
    message: "Enter name of Employee's updated Role:"
  },
  {
    name: "employeeNewRoleID",
    type: "input",
    message: "Enter ID of Employee's updated Role:"
  }
]).then(ans => {
   
    db.query("INSERT INTO employee(first_name, last_name, roles_id, manager_id) VALUES (?,?,?)", [ans.updateRole, ans.employeeNewRole, ans.employeeNewRoleID], (err, results) => {
      if (err){
          console.log(err)
      }else{
          console.table(results);
          teamOptions();
      }
    })
});
};

const viewRoles = () => {
  db.query("SELECT*FROM roles", function (err, results) {
    console.table(results);
    teamOptions();
  });
  teamOptions();
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: "newRole",
        type: "input",
        message: "Name of new Role:",
      },
      {
        name: "newSalary",
        type: "input",
        message: "Salary of new Role:",
      },
      {
        name: "newDepartmentID",
        type: "input",
        message: "New Department ID:",
      },
    ])
    .then(ans => {
        db.query("INSERT INTO roles(title, salary, department_id) VALUES (?,?,?)", [ans.newRole, ans.newSalary, ans.newDepartmentID], (err, results) => {
            if (err){
                console.log(err)
            }else{
                console.table(results);
                teamOptions();
            }
          })
});
};

const viewDepartments = () => {
  db.query("SELECT*FROM department", (err, results) => {
    if (err){
        console.log(err)
    }else{
        console.table(results);
        teamOptions();
    }
  })
};

const addDepartment = () => {
  inquirer.prompt([
      {
        name: "departmentName",
        type: "input",
        message: "Name of new department:",
      },
    ])
    .then(ans => {
        db.query("INSERT INTO department(name) VALUES (?)", [ans.departmentName], (err, results) => {
            if (err){
                console.log(err)
            }else{
                console.table(results);
                teamOptions();
            }
          })
});
};
