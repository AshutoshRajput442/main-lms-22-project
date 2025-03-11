
import React from "react";
import LeftCorner from "./LeftCorner";
import "./Emp.css";
import Second from "./Second";

const Emplogin = () => {
  return (
    <div className="container">
      <LeftCorner />
      <div className="right-container">
        <iframe src="/courses" className="iframe" width="100%" height="640px">
        
        </iframe>
      </div>
    </div>
  );
};

export default Emplogin;