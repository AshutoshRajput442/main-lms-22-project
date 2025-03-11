package handlers

import (
	"backend/db"
	"backend/models"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

// Uploads folder path
const uploadFolder = "uploads/"

// // Add Course
func AddCourse(c *gin.Context) {
	title := c.PostForm("title")
	description := c.PostForm("description")
	duration := c.PostForm("duration")

	// Handle file uploads
	image, _ := c.FormFile("image")
	pdf, _ := c.FormFile("pdf")

	imagePath := uploadFolder + image.Filename
	pdfPath := uploadFolder + pdf.Filename

	// Save files
	if err := c.SaveUploadedFile(image, imagePath); err != nil {
		log.Println("Error saving image:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save image"})
		return
	}
	if err := c.SaveUploadedFile(pdf, pdfPath); err != nil {
		log.Println("Error saving PDF:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save PDF"})
		return
	}

	// Insert into database
	query := "INSERT INTO courses (title, description, duration, image_path, pdf_path) VALUES (?, ?, ?, ?, ?)"
	_, err := db.DB.Exec(query, title, description, duration, imagePath, pdfPath)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database insert failed"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Course added successfully!"})
}

// Add Course
// func AddCourse(c *gin.Context) {
// 	title := c.PostForm("title")
// 	description := c.PostForm("description")

// 	// Convert duration from string to INT
// 	durationStr := c.PostForm("duration")
// 	duration, err := strconv.Atoi(durationStr)
// 	if err != nil {
// 		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid duration format"})
// 		return
// 	}

// 	// Handle file uploads
// 	image, _ := c.FormFile("image")
// 	pdf, _ := c.FormFile("pdf")

// 	imagePath := uploadFolder + image.Filename
// 	pdfPath := uploadFolder + pdf.Filename

// 	// Save files
// 	if err := c.SaveUploadedFile(image, imagePath); err != nil {
// 		log.Println("Error saving image:", err)
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save image"})
// 		return
// 	}
// 	if err := c.SaveUploadedFile(pdf, pdfPath); err != nil {
// 		log.Println("Error saving PDF:", err)
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save PDF"})
// 		return
// 	}

// 	// Insert into database (duration now as INT)
// 	query := "INSERT INTO courses (title, description, duration, image_path, pdf_path) VALUES (?, ?, ?, ?, ?)"
// 	_, err = db.DB.Exec(query, title, description, duration, imagePath, pdfPath)
// 	if err != nil {
// 		c.JSON(http.StatusInternalServerError, gin.H{"error": "Database insert failed"})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{"message": "Course added successfully!"})
// }

// Get Courses
func GetCourses(c *gin.Context) {
	rows, err := db.DB.Query("SELECT * FROM courses ORDER BY created_at DESC")
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch courses"})
		return
	}
	defer rows.Close()

	var courses []models.Course
	for rows.Next() {
		var course models.Course
		err := rows.Scan(&course.ID, &course.Title, &course.Description, &course.Duration, &course.ImagePath, &course.PDFPath, &course.CreatedAt)
		if err != nil {
			fmt.Println("Error scanning:", err)
			continue
		}
		courses = append(courses, course)
	}

	c.JSON(http.StatusOK, courses)
}
