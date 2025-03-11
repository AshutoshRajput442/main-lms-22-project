package models

type Employee struct {
	ID      uint   `gorm:"primaryKey"`
	EmpID   string `gorm:"unique;not null"`
	EmpPass string `gorm:"not null"`
}

type Course struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Duration    int    `json:"duration"` // Changed to int
	ImagePath   string `json:"image_path"`
	PDFPath     string `json:"pdf_path"`
	CreatedAt   string `json:"created_at"`
}
