// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Third() {
//   const { id } = useParams();
//   const [pdfPath, setPdfPath] = useState("");

//   useEffect(() => {
//     fetchPdfPath();
//   }, []);

//   const fetchPdfPath = async () => {
//     const res = await axios.get(`http://localhost:8080/get-courses`);
//     const course = res.data.find((c) => c.id.toString() === id);
//     if (course) setPdfPath(`http://localhost:8080/${course.pdf_path}`);
//   };

//   return (
//     <div>
//       {pdfPath ? (
//         <iframe src={pdfPath} width="100%" height="600px"></iframe>
//       ) : (
//         <p>Third page Loading PDF...</p>
//       )}
//     </div>
//   );
// }

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { MdOutlineWatchLater } from "react-icons/md";

// export default function Third() {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);

//   useEffect(() => {
//     fetchCourseDetails();
//   }, [id]);

//   const fetchCourseDetails = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/get-courses");
//       const foundCourse = res.data.find((c) => c.id.toString() === id);
//       if (foundCourse) {
//         setCourse(foundCourse);
//       }
//     } catch (error) {
//       console.error("Error fetching course details:", error);
//     }
//   };

//   if (!course) {
//     return <p>Loading course details...</p>;
//   }

//   return (
//     <div style={{ display: "flex", padding: "20px" }}>
//       {/* Left side: Course details */}
//       <div style={{ flex: "0.3 ", marginRight: "20px" }}>
//         <h2>{course.title}</h2>
//         <p>
//           <strong>Duration:</strong> {course.duration} Hours
//         </p>
//         <p style={{ display: "flex", alignItems: "center" }}>
//           <MdOutlineWatchLater style={{ marginRight: "6px" }} />
//           <strong>Watch Time:</strong> {course.watchTime || "N/A"}
//         </p>
//       </div>

//       {/* Right side: PDF displayed in an iframe */}
//       <div style={{ flex: "2" }}>
//         <iframe
//           src={`http://localhost:8080/${course.pdf_path}`}
//           title="Course PDF"
//           width="100%"
//           height="677px"
//           style={{
//             border: "none",
//             margin: 0,
//             padding: 0,
//             overflow: "hidden", // or "hidden"
//             // display: "block",
//             // border: "2px solid black";
//           }}
//           scrolling="auto"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

//------------------------next module button  calcuate time

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { MdOutlineWatchLater } from "react-icons/md";

// export default function Third() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [isPdfOpened, setIsPdfOpened] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0); // in seconds
//   const timerRef = useRef(null);

//   useEffect(() => {
//     fetchCourseDetails();
//     return () => clearInterval(timerRef.current);
//   }, [id]);

//   const fetchCourseDetails = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/get-courses");
//       const foundCourse = res.data.find((c) => c.id.toString() === id);
//       if (foundCourse) {
//         setCourse(foundCourse);
//       }
//     } catch (error) {
//       console.error("Error fetching course details:", error);
//     }
//   };

//   // When the user clicks the placeholder, open the PDF and start the timer.
//   const handleOpenPdf = () => {
//     setIsPdfOpened(true);
//     timerRef.current = setInterval(() => {
//       setElapsedTime((prev) => prev + 1);
//     }, 1000);
//   };

//   // Calculate required watch time: 30% of course duration (assuming duration is in hours)
//   const requiredTimeSeconds =
//     course && course.duration ? parseFloat(course.duration) * 3600 * 0.3 : 0;
//     // course && course.duration ? parseFloat(course.duration) * 3600 * 0.001 : 0;

//   const canProceed = elapsedTime >= requiredTimeSeconds;

//   if (!course) {
//     return <p>Loading course details...</p>;
//   }

//   return (
//     <div style={{ display: "flex", padding: "20px" }}>
//       {/* Left Panel: Course Details */}
//       <div style={{ flex: "0.3", marginRight: "20px" }}>
//         <h2>{course.title}</h2>
//         <p>
//           <strong>Duration:</strong> {course.duration} Hours
//         </p>
//         <p style={{ display: "flex", alignItems: "center" }}>
//           <MdOutlineWatchLater style={{ marginRight: "6px" }} />
//           <strong>Watch Time:</strong> {elapsedTime} seconds
//         </p>
//       </div>

//       {/* Right Panel: PDF Display Area */}
//       <div style={{ flex: "2" }}>
//         {!isPdfOpened ? (
//           <div
//             onClick={handleOpenPdf}
//             style={{
//               width: "100%",
//               height: "677px",
//               backgroundColor: "#f0f0f0",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: "pointer",
//               border: "1px dashed #ccc",
//             }}
//           >
//             <p>Click here to open PDF</p>
//           </div>
//         ) : (
//           <iframe
//             src={`http://localhost:8080/${course.pdf_path}`}
//             title="Course PDF"
//             width="100%"
//             height="677px"
//             style={{
//               border: "none",
//               margin: 0,
//               padding: 0,
//               overflow: "hidden",
//             }}
//             scrolling="auto"
//           ></iframe>
//         )}

//         {/* Next Module Button */}
//         <div style={{ marginTop: "20px" }}>
//           <button
//             onClick={() => navigate("/next-module")}
//             disabled={!canProceed}
//             style={{
//               padding: "10px 20px",
//               backgroundColor: canProceed ? "green" : "gray",
//               color: "#fff",
//               border: "none",
//               cursor: canProceed ? "pointer" : "not-allowed",
//               filter: canProceed ? "none" : "blur(2px)",
//             }}
//           >
//             Next Module
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//*********************************pdf size button small size me */

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { MdOutlineWatchLater } from "react-icons/md";
// import { AiOutlineFilePdf } from "react-icons/ai"; // ✅ PDF Icon

// export default function Third() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [isPdfOpened, setIsPdfOpened] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0); // in seconds
//   const timerRef = useRef(null);

//   useEffect(() => {
//     fetchCourseDetails();
//     return () => clearInterval(timerRef.current);
//   }, [id]);

//   const fetchCourseDetails = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/get-courses");
//       const foundCourse = res.data.find((c) => c.id.toString() === id);
//       if (foundCourse) {
//         setCourse(foundCourse);
//       }
//     } catch (error) {
//       console.error("Error fetching course details:", error);
//     }
//   };

//   // 📌 PDF Open karne par Timer Start hoga
//   const handleOpenPdf = () => {
//     setIsPdfOpened(true);
//     timerRef.current = setInterval(() => {
//       setElapsedTime((prev) => prev + 1);
//     }, 1000);
//   };

//   // ✅ 0.1% Duration Condition
//   const requiredTimeSeconds =
//     course && course.duration ? parseFloat(course.duration) * 3600 * 0.001 : 0;
//   const canProceed = elapsedTime >= requiredTimeSeconds;

//   if (!course) {
//     return <p>Loading course details...</p>;
//   }

//   return (
//     <div style={{ display: "flex", padding: "20px" }}>
//       {/* Left Panel: Course Details */}
//       <div style={{ flex: "0.3", marginRight: "20px" }}>
//         <h2>{course.title}</h2>
//         <p>
//           <strong>Duration:</strong> {course.duration} Hours
//         </p>
//         <p style={{ display: "flex", alignItems: "center" }}>
//           <MdOutlineWatchLater style={{ marginRight: "6px" }} />
//           <strong>Watch Time:</strong> {elapsedTime} seconds
//         </p>
//       </div>

//       {/* Right Panel: PDF Display Area */}
//       <div style={{ flex: "2", textAlign: "center" }}>
//         {!isPdfOpened ? (
//           <button className="pdf-open-button" onClick={handleOpenPdf}>
//              <AiOutlineFilePdf/>  Open PDF
//           </button>
//         ) : (
//           <iframe
//             src={`http://localhost:8080/${course.pdf_path}`}
//             title="Course PDF"
//             width="100%"
//             height="677px"
//             style={{
//               border: "none",
//               margin: 0,
//               padding: 0,
//               overflow: "hidden",
//             }}
//             scrolling="auto"
//           ></iframe>
//         )}

//         {/* Next Module Button */}
//         <div style={{ marginTop: "20px" }}>
//           <button
//             onClick={() => navigate("/next-module")}
//             disabled={!canProceed}
//             className={`next-button ${canProceed ? "enabled" : "disabled"}`}
//           >
//             Next Module
//           </button>
//         </div>
//       </div>

//       {/* ✅ CSS */}
//       <style>
//         {`
//           .pdf-open-button {
//             background-color: #007bff;
//             color: white;
//             padding: 10px 20px;
//             font-size: 16px;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//             transition: background 0.3s ease;
//           }
//           .pdf-open-button:hover {
//             background-color: #0056b3;
//           }
//           .next-button {
//             padding: 10px 20px;
//             font-size: 16px;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//             color: white;
//           }
//           .next-button.enabled {
//             background-color: green;
//           }
//           .next-button.disabled {
//             background-color: gray;
//             cursor: not-allowed;
//             filter: blur(2px);
//           }
//         `}
//       </style>
//     </div>
//   );
// }

//            code + css
// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { AiOutlineFilePdf } from "react-icons/ai";

// import {
//   MdOutlineWatchLater,
//   MdOutlineAccessTime,
//   MdOutlineSubtitles,
// } from "react-icons/md";

// import "./Third.css"; // ✅ CSS Import kiya

// export default function Third() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [isPdfOpened, setIsPdfOpened] = useState(false);
//   const [elapsedTime, setElapsedTime] = useState(0);
//   const timerRef = useRef(null);

//   useEffect(() => {
//     fetchCourseDetails();
//     return () => clearInterval(timerRef.current);
//   }, [id]);

//   const fetchCourseDetails = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/get-courses");
//       const foundCourse = res.data.find((c) => c.id.toString() === id);
//       if (foundCourse) {
//         setCourse(foundCourse);
//       }
//     } catch (error) {
//       console.error("Error fetching course details:", error);
//     }
//   };

//   const handleOpenPdf = () => {
//     setIsPdfOpened(true);
//     timerRef.current = setInterval(() => {
//       setElapsedTime((prev) => prev + 1);
//     }, 1000);
//   };


  
//   const requiredTimeSeconds =
//     course && course.duration ? parseFloat(course.duration) * 3600 * 0.001 : 0;
//   const canProceed = elapsedTime >= requiredTimeSeconds;

//   if (!course) {
//     return <p>Loading course details...</p>;
//   }

//   return (
//     <div className="third-container">
//       {/* Left Panel: Course Details */}
//       <div className="course-details">
//         <h2>
//           {" "}
//           <MdOutlineSubtitles className="course-icon" />
//           {course.title}
//         </h2>
//         <p className="course-duration">
//           <MdOutlineAccessTime className="course-icon" />
//           <strong>Duration:</strong> {course.duration} Hours
//         </p>
//         <p className="course-time">
//           <MdOutlineWatchLater className="course-icon" />
//           <strong>Watch Time:</strong> {elapsedTime} seconds
//         </p>
//       </div>

//       {/* Right Panel: PDF Display Area */}
//       <div className="pdf-container">
//         {!isPdfOpened ? (
//           <button className="pdf-open-button" onClick={handleOpenPdf}>
//             <AiOutlineFilePdf className="pdf-icon" /> Open PDF
//           </button>
//         ) : (
//           <iframe
//             src={`http://localhost:8080/${course.pdf_path}`}
//             title="Course PDF"
//             className="pdf-viewer"
//             scrolling="auto"
//           ></iframe>
//         )}

//         {/* Next Module Button */}
//         <div className="next-button-container">
//           <button
//             onClick={() => navigate("/next-module")}
//             disabled={!canProceed}
//             className={`next-button ${canProceed ? "enabled" : "disabled"}`}
//           >
//             Next Module
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { AiOutlineFilePdf } from "react-icons/ai";
import {
  MdOutlineWatchLater,
  MdOutlineAccessTime,
  MdOutlineSubtitles,
} from "react-icons/md";

import "./Third.css"; // ✅ CSS Import kiya

export default function Third() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isPdfOpened, setIsPdfOpened] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    fetchCourseDetails();
    return () => clearInterval(timerRef.current);
  }, [id]);

  const fetchCourseDetails = async () => {
    try {
      const res = await axios.get("http://localhost:8080/get-courses");
      const foundCourse = res.data.find((c) => c.id.toString() === id);
      if (foundCourse) {
        setCourse(foundCourse);
      }
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  const handleOpenPdf = () => {
    setIsPdfOpened(true);
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
  };

  // ✅ Time Format Function (Seconds → Minutes → Hours)
  const formatElapsedTime = (seconds) => {
    if (seconds < 60) {
      return `${seconds} seconds`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return `${minutes} minutes ${seconds % 60} seconds`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const remainingMinutes = Math.floor((seconds % 3600) / 60);
      return `${hours} hours ${remainingMinutes} minutes`;
    }
  };

  const requiredTimeSeconds =
    course && course.duration ? parseFloat(course.duration) * 3600 * 0.001 : 0;
  const canProceed = elapsedTime >= requiredTimeSeconds;

  if (!course) {
    return <p>Loading course details...</p>;
  }

  return (
    <div className="third-container">
      {/* Left Panel: Course Details */}
      <div className="course-details">
        <h2>
          <MdOutlineSubtitles className="course-icon" />
          {course.title}
        </h2>
        <p className="course-duration">
          <MdOutlineAccessTime className="course-icon" />
          <strong>Duration:</strong> {course.duration} Hours
        </p>
        <p className="course-time">
          <MdOutlineWatchLater className="course-icon" />
          <strong>Watch Time:</strong> {formatElapsedTime(elapsedTime)}
        </p>
      </div>

      {/* Right Panel: PDF Display Area */}
      <div className="pdf-container">
        {!isPdfOpened ? (
          <button className="pdf-open-button" onClick={handleOpenPdf}>
            <AiOutlineFilePdf className="pdf-icon" /> Open PDF
          </button>
        ) : (
          <iframe
            src={`http://localhost:8080/${course.pdf_path}`}
            title="Course PDF"
            className="pdf-viewer"
            scrolling="auto"
          ></iframe>
        )}

        {/* Next Module Button */}
        <div className="next-button-container">
          <button
            onClick={() => navigate("/next-module")}
            disabled={!canProceed}
            className={`next-button ${canProceed ? "enabled" : "disabled"}`}
          >
            Next Module
          </button>
        </div>
      </div>
    </div>
  );
}
