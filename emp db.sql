USE coursedb;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id VARCHAR(50) UNIQUE NOT NULL,
    emp_pass VARCHAR(255) NOT NULL CHECK (CHAR_LENGTH(emp_pass) >= 4)
);

INSERT INTO employees (emp_id, emp_pass) VALUES 
('EMP001', 'pass123'),
('EMP002', 'secure456'),
('EMP003', 'admin789'),
('EMP004', 'test4321'),
('EMP005', 'hello123');


SELECT * FROM coursedb.employees;
