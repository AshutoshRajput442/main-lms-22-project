// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Second() {
//   const [courses, setCourses] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     const res = await axios.get("http://localhost:8080/get-courses");
//     setCourses(res.data);
//   };

//   const filteredCourses = courses.filter((course) =>
//     course.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//         Search By NAME      
//       <input
//         type="text"
//         placeholder="Search Course..."
//         onChange={(e) => setSearch(e.target.value)}

//         style={{
//           display: "block",
//           margin: "10px 0",
//           width: "300px",
//           padding: "8px",
//         }}




        
//       />
//       <div className="course-container">
//         {filteredCourses.map((course) => (
//           <div key={course.id} className="course-card">
//             <img src={`http://localhost:8080/${course.image_path}`} alt={course.title} />
//             <h3>{course.title}</h3>
//             <p>{course.description}</p>
//             <p><b>Duration:</b> {course.duration}</p>




//             {/* Start Learning Button - Redirect to /startlearning */}
//             <button onClick={() => window.open(`/pdf/${course.id}`, "_blank")}
//                 style={{
//                   padding: "8px 16px",
//                   backgroundColor: "#007bff",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 Start Learning
//               </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import axios from "axios";
import "./second.css"; // CSS import kiya

export default function Second() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/get-courses");
      setCourses(res.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="second-container">
      {/* <label className="search-label">Search By NAME</label> */}
      <input 
      id="searchBox"
        type="text"
        placeholder="Search Course..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="course-container">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={`http://localhost:8080/${course.image_path}`}
              alt={course.title}
              className="course-image"
            />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-duration" >
              <b id="cd">Duration:</b> {course.duration}
            </p>

            <button
              onClick={() => window.open(`/pdf/${course.id}`, "_blank")}
              className="start-learning-button"
            >
              Start Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
