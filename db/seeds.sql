USE team_db;

INSERT INTO department(name)
VALUES ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");

INSERT INTO roles(title, salary)
VALUES ("Sale Lead", 100000),
       ("Salesperson", 80000),
        ("Lead Engineer", 150000),
        ("Software Engineer", 70000),
        ("Account Manager", 60000),
        ("Accountant", 55000),
        ("Legal Team Lead", 100000),
        ("Lawyer", 120000);

INSERT INTO employee(first_name, last_name)
VALUES("Kelly", "Morris"),
        ("Mercedes", "Montoya"),
        ("Savanah", "Jones"),
        ("Destiny", "Smith"),
        ("Lola", "Garcia"),
        ("Diamond", "Star"),
        ("Taylor", "Miller"),
        ("Hazel", "Rose");