// import React from "react";
// import { Link } from "react-router-dom";
// import "./leftcorner.css"; 
// import { FaQuestionCircle, FaCommentDots } from "react-icons/fa";
// import { ImProfile } from "react-icons/im";
// import { MdDashboardCustomize } from "react-icons/md";
// import { SiQuizlet } from "react-icons/si";
// import { HiOutlineLogout } from "react-icons/hi";

// const LeftCorner = () => {
//   return (
//     <div className="left-container">
//       <Link to="/my-Dashboard" className="menu-item">
//         <MdDashboardCustomize className="icon" /> Dashboard
//       </Link>
//       <Link to="/my-profile" className="menu-item">
//         <ImProfile className="icon" /> My Profile
//       </Link>
//       <Link to="/exam-qa" className="menu-item">
//         <SiQuizlet className="icon" /> Exam / Q & A
//       </Link>
//       <Link to="/interview-questions" className="menu-item">
//         <FaQuestionCircle className="icon" /> Interview Questions
//       </Link>
//       <Link to="/feedback" className="menu-item">
//         <FaCommentDots className="icon" /> Feedback
//       </Link>
//       <Link to="/logout" className="menu-item logout">
//         <HiOutlineLogout className="icon" /> Logout
//       </Link>
//     </div>
//   );
// };

// export default LeftCorner;



// import "./LeftCorner.css";

// export default function LeftCorner() {
//   return <div className="left-container">Left Corner Content</div>;
// }






import React from "react";
import { Link } from "react-router-dom";
import "./leftcorner.css";
import { FaQuestionCircle, FaCommentDots } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdDashboardCustomize } from "react-icons/md";
import { SiQuizlet } from "react-icons/si";
import { HiOutlineLogout } from "react-icons/hi";

const LeftCorner = () => {
  return (
    <div className="left-container">
      <Link to="/my-Dashboard" className="menu-item">
        <MdDashboardCustomize className="icon" /> Dashboard
      </Link>
      <Link to="/my-profile" className="menu-item">
        <ImProfile className="icon" /> My Profile
      </Link>
      <Link to="/exam-qa" className="menu-item">
        <SiQuizlet className="icon" /> Exam / Q & A
      </Link>
      <Link to="/interview-questions" className="menu-item">
        <FaQuestionCircle className="icon" /> Interview Questions
      </Link>
      <Link to="/feedback" className="menu-item">
        <FaCommentDots className="icon" /> Feedback
      </Link>
      <Link to="/logout" className="menu-item logout">
        <HiOutlineLogout className="icon" /> Logout
      </Link>
    </div>
  );
};

export default LeftCorner