const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
        db.query("SELECT*FROM employee", function (err, results) {
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
      else {
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
    ])
    .then((ans) => {
      const newEmployee = new Employee(ans.employeeNameF, ans.employeeNameL);
    });
};

const updateEmployeeRole = () => {
  inquirer.prompt([{}]);
};

const viewRoles = () => {
    db.query("SELECT*FROM roles", function (err, results) {
        console.table(results);
        teamOptions();
      });
}

const addRole = () => {
  inquirer.prompt([
    {
        name: "newRole",
        type: "input",
        message: "Name of new Role:"
  },
]).then(ans => {

})
;
};

const viewDepartments = () => {
    db.query("SELECT*FROM departments", function (err, results) {
        console.table(results);
        teamOptions();
      });
}

const addDepartment = () => {
    inquirer.prompt([{

    }]);
  };
