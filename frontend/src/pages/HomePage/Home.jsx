// import { useState } from "react";
import "./Home.css";
// import Header from "../Header";
import Home_EmployeeLogin from "./Home_EmployeeLogin"
import Home_AdminLogin from "./Home_AdminLogin"
import Home_About_Company from "./Home_About_Company";

function Home() {
  return (
    <div className="app-container">
      <div className="login-container">
        <Home_AdminLogin />
        <Home_EmployeeLogin />
      </div>
      <Home_About_Company />
    </div>
  );
}

export default Home;