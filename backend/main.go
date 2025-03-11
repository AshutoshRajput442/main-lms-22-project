package main

import (
	"backend/db"
	"backend/routes"
)

func main() {
	db.ConnectDB()
	r := routes.SetupRouter()
	r.Run(":8080")
}
