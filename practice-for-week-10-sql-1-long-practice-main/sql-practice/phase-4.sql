PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT, full_name TEXT NOT NULL UNIQUE, department TEXT NOT NULL, role TEXT NOT NULL
);

DROP TABLE IF EXISTS performance_reviews;

CREATE TABLE performance_reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT, employee_id INT NOT NULL, score DECIMAL(2, 1) NOT NULL, FOREIGN KEY (employee_id) REFERENCES employees (id)
);

DROP TABLE IF EXISTS romantic_relationships;

CREATE TABLE romantic_relationships (
    id INTEGER PRIMARY KEY AUTOINCREMENT, employee1_name TEXT NOT NULL, employee2_name TEXT NOT NULL, FOREIGN KEY (employee1_name) REFERENCES employees (full_name), FOREIGN KEY (employee2_name) REFERENCES employees (full_name)
);

DROP TABLE IF EXISTS parties;

CREATE TABLE parties (
    id INTEGER PRIMARY KEY AUTOINCREMENT, budget DECIMAL(6, 2) NOT NULL, onsite BOOLEAN NOT NULL
);

-- 1-7
INSERT INTO
    employees (full_name, department, role)
VALUES (
        "Michael Scott", "Management", "Regional Manager"
    ),
    (
        "Dwight Schrute", "Sales", "Assistant Regional Manager"
    ),
    (
        "Jim Halpert", "Sales", "Sales Representative"
    ),
    (
        "Pam Beesly", "Reception", "Receptionist"
    ),
    (
        "Kelly Kapoor", "Product Oversight", "Customer Service Representative"
    ),
    (
        "Angela Martin", "Accounting", "Head of Accounting"
    ),
    (
        "Roy Anderson", "Warehouse", "Warehouse Staff"
    );

-- 8
INSERT INTO
    romantic_relationships (
        employee1_name, employee2_name
    )
VALUES ("Roy Anderson", "Pam Beesly");

-- 9
INSERT INTO
    employees (full_name, department, role)
VALUES (
        "Ryan Howard", "Reception", "Temp"
    );

-- 10
INSERT INTO parties (budget, onsite) VALUES (100.00, 1);

-- 11-12
INSERT INTO
    performance_reviews (employee_id, score)
VALUES (2, 3.3),
    (3, 4.2);

-- 13
UPDATE performance_reviews SET score = 9.0 WHERE employee_id = 2;

-- 14
UPDATE performance_reviews SET score = 9.3 WHERE employee_id = 3;

--  15
UPDATE employees
SET role = "Assistant Regional Manager"
WHERE
    full_name = "Jim Halpert";

-- 16
UPDATE employees
SET
    department = "Sales",
    role = "Sales Representative"
WHERE
    full_name = "Ryan Howard";

-- 17
INSERT INTO parties (budget, onsite) VALUES (200.00, 1);

-- 18
INSERT INTO
    romantic_relationships (
        employee1_name, employee2_name
    )
VALUES (
        "Angela Martin", "Dwight Schrute"
    );

-- 19
INSERT INTO performance_reviews (employee_id, score) VALUES (6, 6.2);

-- 20
INSERT INTO
    romantic_relationships (
        employee1_name, employee2_name
    )
VALUES ("Ryan Howard", "Kelly Kapoor");

-- 21
INSERT INTO parties (budget, onsite) VALUES (50.00, 1);

-- 22
DELETE FROM performance_reviews WHERE employee_id = 3;

DELETE FROM romantic_relationships
WHERE
    employee1_name = "Jim Halpert"
    OR employee2_name = "Jim Halpert";

DELETE FROM employees WHERE full_name = "Jim Halpert";

-- 23
DELETE FROM romantic_relationships
WHERE
    employee1_name = "Roy Anderson"
    AND employee2_name = "Pam Beesly";

-- 24
INSERT INTO
    performance_reviews (employee_id, score)
VALUES (4, 7.6);

--  25
INSERT INTO performance_reviews (employee_id, score) VALUES (2, 8.7);

--  26
DELETE FROM romantic_relationships
WHERE
    employee1_name = "Ryan Howard";

DELETE FROM performance_reviews WHERE employee_id = 8;

DELETE FROM employees WHERE full_name = "Ryan Howard";

-- 27
INSERT INTO
    employees (full_name, department, role)
VALUES (
        "Jim Halpert", "Sales", "Sales Representative"
    );

-- 28
INSERT INTO
    employees (full_name, department, role)
VALUES (
        "Karen Filippelli", "Sales", "Sales Representative"
    );

-- 29
INSERT INTO
    romantic_relationships (
        employee1_name, employee2_name
    )
VALUES (
        "Karen Filippelli", "Jim Halpert"
    );

-- 30
INSERT INTO parties (budget, onsite) VALUES (120.00, 1);

-- 31
DELETE FROM parties WHERE budget = 120.00 AND onsite = 1;

INSERT INTO parties (budget, onsite) VALUES (300.00, 0);

-- 32
DELETE FROM romantic_relationships
WHERE
    employee1_name = "Karen Filippelli"
    AND employee2_name = "Jim Halpert";

-- 33

INSERT INTO
    romantic_relationships (
        employee1_name, employee2_name
    )
VALUES ("Pam Beesly", "Jim Halpert");
