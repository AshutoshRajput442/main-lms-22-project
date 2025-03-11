///    ***************************************only add courses option

// import { useState } from "react";
// import axios from "axios";

// export default function First() {
//   const [course, setCourse] = useState({ title: "", description: "", duration: "", image: null, pdf: null });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(course).forEach(([key, value]) => formData.append(key, value));

//     await axios.post("http://localhost:8080/add-course", formData);
//     alert("Course added!");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Title" onChange={(e) => setCourse({ ...course, title: e.target.value })} required />
//       <input type="text" placeholder="Description" onChange={(e) => setCourse({ ...course, description: e.target.value })} required />
//       <input type="text" placeholder="Duration" onChange={(e) => setCourse({ ...course, duration: e.target.value })} required />
//       <input type="file" accept="image/*" onChange={(e) => setCourse({ ...course, image: e.target.files[0] })} required />
//       <input type="file" accept="application/pdf" onChange={(e) => setCourse({ ...course, pdf: e.target.files[0] })} required />
//       <button type="submit">Add Course</button>
//     </form>
//   );
// }

///    ******************** details and cards
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { MdOutlineWatchLater } from "react-icons/md";

// export default function First() {
//   const [course, setCourse] = useState({
//     title: "",
//     description: "",
//     duration: "",
//     image: null,
//     pdf: null,
//   });
//   const [courses, setCourses] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     const res = await axios.get("http://localhost:8080/get-courses");
//     setCourses(res.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(course).forEach(([key, value]) => formData.append(key, value));

//     await axios.post("http://localhost:8080/add-course", formData);
//     alert("Course added!");
//     setCourse({ title: "", description: "", duration: "", image: null, pdf: null });
//     fetchCourses();
//   };

//   const filteredCourses = courses.filter((c) =>
//     c.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Add Course</h1>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
//         <input type="text" placeholder="Title" value={course.title} onChange={(e) => setCourse({ ...course, title: e.target.value })} required />
//         <input type="text" placeholder="Description" value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} required />
//         <input type="text" placeholder="Duration" value={course.duration} onChange={(e) => setCourse({ ...course, duration: e.target.value })} required />
//         <input type="file" accept="image/*" onChange={(e) => setCourse({ ...course, image: e.target.files[0] })} required />
//         <input type="file" accept="application/pdf" onChange={(e) => setCourse({ ...course, pdf: e.target.files[0] })} required />
//         <button type="submit">Add Course</button>
//       </form>

//       <h1>Courses</h1>
//       <input
//         type="text"
//         placeholder="Search Course..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ display: "block", margin: "10px 0", width: "300px", padding: "8px" }}
//       />

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {filteredCourses.map((c) => (
//           <div key={c.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", width: "300px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
//             {c.image_path && (
//               <img src={`http://localhost:8080/${c.image_path}`} alt={c.title} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
//             )}
//             <h3 style={{ textTransform: "uppercase", fontWeight: "bold" }}>{c.title}</h3>
//             <p>{c.description}</p>
//             <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//               <p style={{ display: "flex", alignItems: "center", margin: 0 }}>
//                 <MdOutlineWatchLater style={{ marginRight: "6px" }} />
//                 {c.duration} Hours
//               </p>
//               <button onClick={() => window.open(`/pdf/${c.id}`, "_blank")} style={{ background: "#007bff", color: "#fff", border: "none", padding: "8px 12px", cursor: "pointer", borderRadius: "5px" }}>View PDF</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

//    ----------------------------start learngin

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { MdOutlineWatchLater } from "react-icons/md";

// export default function First() {
//   const navigate = useNavigate(); // For navigation
//   const [course, setCourse] = useState({
//     title: "",
//     description: "",
//     duration: "",
//     image: null,
//     pdf: null,
//   });
//   const [courses, setCourses] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     const res = await axios.get("http://localhost:8080/get-courses");
//     setCourses(res.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(course).forEach(([key, value]) =>
//       formData.append(key, value)
//     );

//     await axios.post("http://localhost:8080/add-course", formData);
//     alert("Course added!");
//     setCourse({
//       title: "",
//       description: "",
//       duration: "",
//       image: null,
//       pdf: null,
//     });
//     fetchCourses();
//   };

//   const filteredCourses = courses.filter((c) =>
//     c.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Add Course</h1>
//       <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={course.title}
//           onChange={(e) => setCourse({ ...course, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={course.description}
//           onChange={(e) =>
//             setCourse({ ...course, description: e.target.value })
//           }
//           required
//         />
//         <input
//           type="text"
//           placeholder="Duration"
//           value={course.duration}
//           onChange={(e) => setCourse({ ...course, duration: e.target.value })}
//           required
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setCourse({ ...course, image: e.target.files[0] })}
//           required
//         />
//         <input
//           type="file"
//           accept="application/pdf"
//           onChange={(e) => setCourse({ ...course, pdf: e.target.files[0] })}
//           required
//         />
//         <button type="submit">Add Course</button>
//       </form>

//       <h1>Courses</h1>
//       <input
//         type="text"
//         placeholder="Search Course..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{
//           display: "block",
//           margin: "10px 0",
//           width: "300px",
//           padding: "8px",
//         }}
//       />










//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>


//         {filteredCourses.map((c) => (
//           <div
//             key={c.id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "16px",
//               width: "300px",
//               boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
//             }}
//           >
//             {c.image_path && (

//               <img
//                 src={`http://localhost:8080/${c.image_path}`}
//                 alt={c.title}
//                 style={{
//                   width: "100%",
//                   height: "200px",
//                   objectFit: "cover",
//                   borderRadius: "8px",
//                 }}
//               />
//             )}
//             <h3 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
//               {c.title}
//             </h3>
//             <p>{c.description}</p>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <p style={{ display: "flex", alignItems: "center", margin: 0 }}>
//                 <MdOutlineWatchLater style={{ marginRight: "6px" }} />
//                 {c.duration} Hours
//               </p>
//            <button onClick={() => window.open(`/pdf/${c.id}`, "_blank")}
//                 style={{
//                   padding: "8px 16px",
//                   backgroundColor: "#007bff",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: "5px",
//                   cursor: "pointer",
//                 }}
//               >
//                 view pdf
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { MdOutlineWatchLater } from "react-icons/md";
// import "./First.css"; // ✅ Importing CSS File

// export default function First() {
//   const navigate = useNavigate(); 
//   const [course, setCourse] = useState({
//     title: "",
//     description: "",
//     duration: "",
//     image: null,
//     pdf: null,
//   });
//   const [courses, setCourses] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     const res = await axios.get("http://localhost:8080/get-courses");
//     setCourses(res.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     Object.entries(course).forEach(([key, value]) =>
//       formData.append(key, value)
//     );

//     await axios.post("http://localhost:8080/add-course", formData);
//     alert("Course added!");
//     setCourse({
//       title: "",
//       description: "",
//       duration: "",
//       image: null,
//       pdf: null,
//     });
//     fetchCourses();
//   };

//   const filteredCourses = courses.filter((c) =>
//     c.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="first-container">
//       <h1>Add Course</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={course.title}
//           onChange={(e) => setCourse({ ...course, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={course.description}
//           onChange={(e) => setCourse({ ...course, description: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Duration"
//           value={course.duration}
//           onChange={(e) => setCourse({ ...course, duration: e.target.value })}
//           required
//         />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setCourse({ ...course, image: e.target.files[0] })}
//           required
//         />
//         <input
//           type="file"
//           accept="application/pdf"
//           onChange={(e) => setCourse({ ...course, pdf: e.target.files[0] })}
//           required
//         />
//         <button type="submit">Add Course</button>
//       </form>

//       <h1>Courses</h1>
//       <input
//         type="text"
//         placeholder="Search Course..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="search-input"
//       />

//       <div className="courses-container">
//         {filteredCourses.map((c) => (
//           <div key={c.id} className="course-card">
//             {c.image_path && (
//               <img src={`http://localhost:8080/${c.image_path}`} alt={c.title} />
//             )}
//             <h3>{c.title}</h3>
//             <p>{c.description}</p>
//             <div className="course-duration">
//               <p>
//                 <MdOutlineWatchLater /> {c.duration} Hours
//               </p>
//               <button
//                 onClick={() => window.open(`/pdf/${c.id}`, "_blank")}
//                 className="view-pdf-button"
//               >
//                 View PDF
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineWatchLater } from "react-icons/md";
import "./first.css"; 

const First = () => {
  const navigate = useNavigate(); 
  const [course, setCourse] = useState({
    title: "",
    description: "",
    duration: "",
    image: null,
    pdf: null,
  });
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    const res = await axios.get("http://localhost:8080/get-courses");
    setCourses(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(course).forEach(([key, value]) =>
      formData.append(key, value)
    );

    await axios.post("http://localhost:8080/add-course", formData);
    alert("Course added!");
    
    if (course.title || course.description || course.duration || course.image || course.pdf) {
      setCourse({
        title: "",
        description: "",
        duration: "",
        image: null,
        pdf: null,
      });
      document.getElementById("course-form").reset();
    }
    
    fetchCourses();
  };

  const filteredCourses = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="add-course-container">
      <h2>Add Course</h2>
      <form id="course-form" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          value={course.title}
          onChange={(e) => setCourse({ ...course, title: e.target.value })}
          required
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          value={course.description}
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
          required
        />
        <label>Duration</label>
        <input
          type="text"
          placeholder="Duration"
          value={course.duration}
          onChange={(e) => setCourse({ ...course, duration: e.target.value })}
          required
        />
        <label>Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCourse({ ...course, image: e.target.files[0] })}
          required
        />
        <label>PDF File</label>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setCourse({ ...course, pdf: e.target.files[0] })}
          required
        />
        <button type="submit">Add Course</button>
      </form>

      <h2>Courses</h2>
      <input
        type="text"
        placeholder="Search Course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="courses-container">
        {filteredCourses.map((c) => (
          <div key={c.id} className="course-card">
            {c.image_path && (
              <img src={`http://localhost:8080/${c.image_path}`} alt={c.title} />
            )}
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <div className="course-duration">
              <p>
                <MdOutlineWatchLater /> {c.duration} Hours
              </p>
              <button
                onClick={() => window.open(`/pdf/${c.id}`, "_blank")}
                className="view-pdf-button"
              >
                View PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default First;