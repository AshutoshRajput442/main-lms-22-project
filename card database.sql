CREATE DATABASE coursedb;

USE coursedb;

CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    duration INT NOT NULL,  -- Changed from VARCHAR to INT
    image_path VARCHAR(255) NOT NULL,
    pdf_path VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM COURSES;


SELECT * FROM coursedb.courses;
