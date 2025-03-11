// package db

// import (
// 	"database/sql"
// 	"log"

// 	_ "github.com/go-sql-driver/mysql"
// )

// var DB *sql.DB

// func ConnectDB() {
// 	var err error
// 	DB, err = sql.Open("mysql", "root:root@tcp(127.0.0.1:3306)/coursedb")
// 	if err != nil {
// 		log.Fatal("Database connection failed:", err)
// 	}
// 	if err = DB.Ping(); err != nil {
// 		log.Fatal("Database ping failed:", err)
// 	}
// 	log.Println("Database connected successfully!")
// }

package db

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func ConnectDB() {
	var err error
	DB, err = sql.Open("mysql", "root:root@tcp(127.0.0.1:3306)/coursedb")
	if err != nil {
		log.Fatal("Database connection failed:", err)
	}
	if err = DB.Ping(); err != nil {
		log.Fatal("Database ping failed:", err)
	}
	log.Println("Database connected successfully!")

	// Create employees table if it doesn't exist
	createTableQuery := `
	CREATE TABLE IF NOT EXISTS employees (
		id INT AUTO_INCREMENT PRIMARY KEY,
		emp_id VARCHAR(50) UNIQUE NOT NULL,
		emp_pass VARCHAR(255) NOT NULL CHECK (CHAR_LENGTH(emp_pass) >= 4)
	);`
	_, err = DB.Exec(createTableQuery)
	if err != nil {
		log.Fatal("Table creation failed:", err)
	}
	log.Println("Employees table is ready!")
}
