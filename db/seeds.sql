USE team_db;

INSERT INTO department(name)
VALUES ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales");

INSERT INTO roles(title, salary, department_id)
VALUES ("Sale Lead", 100000, 4),
       ("Salesperson", 80000, 4),
        ("Lead Engineer", 150000, 1),
        ("Software Engineer", 70000, 1),
        ("Account Manager", 60000, 2),
        ("Accountant", 55000, 2),
        ("Legal Team Lead", 100000, 3),
        ("Lawyer", 120000, 3);

INSERT INTO employee(first_name, last_name, roles_id, manager_id)
VALUES("Kelly", "Morris", 1, NULL),
        ("Mercedes", "Montoya",2,1),
        ("Savanah", "Jones", 3, NULL),
        ("Destiny", "Smith", 4, 3),
        ("Lola", "Garcia", 5, NULL),
        ("Diamond", "Star", 6,5),
        ("Taylor", "Miller", 7, NULL),
        ("Hazel", "Rose", 8,7);