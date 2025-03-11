// import React from "react";
// import "./left/LeftCorner.css";

// const LeftCorner = () => {
//   return (
//     <div className="left-container">
//       <ul>
//         <li>Help</li>
//         <li>Contact</li>
//         <li>About Us</li>
//       </ul>
//     </div>
//   );
// };

// export default LeftCorner;
// import React from "react";
// import { FaQuestionCircle, FaPhone, FaInfoCircle } from "react-icons/fa";
// import "./left/LeftCorner.css";

// const LeftCorner = () => {
//   return (
//     <div className="left-container">
//       <ul>
//         <li><FaQuestionCircle className="icon" /> Help</li>
//         <li><FaPhone className="icon" /> Contact</li>
//         <li><FaInfoCircle className="icon" /> About Us</li>
//       </ul>
//     </div>
//   );
// };

// export default LeftCorner;

// import React from "react";
// import "./LeftCorner.css"; // Import styles

// const LeftCorner = () => {
//   return (
//     <div>
//       <ul>
//         <li>📖 Help</li>
//         <li>📞 Contact</li>
//         <li>ℹ️ About Us</li>
//       </ul>
//     </div>
//   );
// };

// export default LeftCorner;

import React from "react";
import "./AdmLeftCorner.css"; 
import { FaQuestionCircle, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImProfile } from "react-icons/im";  // Correct import
import { MdDashboardCustomize } from "react-icons/md";
import { SiQuizlet } from "react-icons/si";
import { HiOutlineLogout } from "react-icons/hi";


const AdmLeftCorner = () => {
  return (
    <div className="left-corner">
      {/* <p className="sub-title red"><FaChalkboardTeacher className="icon" /> My Learning </p>
      <p className="sub-title red"><FaBook className="icon" /> Exam / Q & A</p>
      
      <p className="sub-title red"><FaQuestionCircle className="icon" /> Interview Questions</p>
      <p className="sub-title red"><FaCommentDots className="icon" /> Feedback</p> */}



      <Link to="/my-Dashboard" className="sub-title red">
  <MdDashboardCustomize className="icon" /> Dashboard
</Link>
      <Link to="/my-profile" className="sub-title red">
  <ImProfile className="icon" /> My Profile
</Link>

<Link to="/exam-qa" className="sub-title red">
  <SiQuizlet className="icon" /> Exam / Q & A
</Link>

<Link to="/interview-questions" className="sub-title red">
  <FaQuestionCircle className="icon" /> Interview Questions
</Link>

<Link to="/feedback" className="sub-title red">
  <FaCommentDots className="icon" /> Feedback
</Link>
<Link to="/logout" className="sub-title red">
  <HiOutlineLogout className="icon" /> Logout
</Link>
    </div>
  );
};

export default AdmLeftCorner;
