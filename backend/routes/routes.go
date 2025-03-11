package routes

import (
	"backend/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.Static("/uploads", "./uploads") // Serve uploaded files

	r.POST("/add-course", handlers.AddCourse)
	r.GET("/get-courses", handlers.GetCourses)

	return r
}
